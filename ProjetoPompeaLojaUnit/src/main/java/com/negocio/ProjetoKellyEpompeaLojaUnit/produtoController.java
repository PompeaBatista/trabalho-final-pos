package com.negocio.ProjetoKellyEpompeaLojaUnit;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.basica.ProjetoKellyEpompeaLojaUnit.Produto;
import com.repositorio.ProjetoKellyEpompeaLojaUnit.ProdutoRepositorio;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/produto") 
public class produtoController {


	@Autowired
	private ProdutoRepositorio produtoRepository;

	@PostMapping(path="/add") 
	public @ResponseBody String addNewProduto (@RequestBody Produto produto) {
		produtoRepository.save(produto);
		return "Produto salvo!";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<Produto> getAllProduto() {
		return produtoRepository.findAll();
	}

	@GetMapping(path="/find/{id}")
	public @ResponseBody Optional<Produto> getProdutoById(@PathVariable("id")Integer id){
		return produtoRepository.findById(id);
	}

	@PutMapping(path="/update/{id}")
	public @ResponseBody String updateProduto(@PathVariable("id")Integer id, @RequestBody Produto produto) {
		if(produtoRepository.existsById(id)) {
			produto.setId(id);
			produtoRepository.save(produto);
			return "Produto atualizado! ";
		}
		return "Produto não encontrado!";
	}

	@DeleteMapping(path="/delete/{id}")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public @ResponseBody String deleteProdutoBydId(@PathVariable("id")Integer id) {
		if(produtoRepository.existsById(id)) {
			produtoRepository.deleteById(id);
			return "Produto excluído!";
		}
		return "Produto não encontrado para exclusão! Verifique se o ID está correto.";
	}



}
