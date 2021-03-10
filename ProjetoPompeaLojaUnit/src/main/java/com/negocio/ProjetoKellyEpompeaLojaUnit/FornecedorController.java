package com.negocio.ProjetoKellyEpompeaLojaUnit;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.basica.ProjetoKellyEpompeaLojaUnit.Fornecedor;
import com.repositorio.ProjetoKellyEpompeaLojaUnit.FornecedorRepositorio;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/fornecedor") 
public class FornecedorController {

	@Autowired
	private FornecedorRepositorio fornecedorRepository;

	@PostMapping(path="/add") 
	public @ResponseBody String addNewFornecedor (@RequestBody Fornecedor fornecedor) {	    
		fornecedorRepository.save(fornecedor);
		return "Fornecedor adicionado!";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<Fornecedor> getAllFornecedor() {
		return fornecedorRepository.findAll();
	}

	@GetMapping(path="/find/{id}")
	public @ResponseBody Optional<Fornecedor> getFornecedorById(@PathVariable("id")Integer id){
		return fornecedorRepository.findById(id);
	}

	@PutMapping(path="/update/{id}")
	public @ResponseBody String updateFornecedorById(@PathVariable("id")Integer id, @RequestBody Fornecedor fornecedor) {
		if(fornecedorRepository.existsById(id)) {
			fornecedor.setId(id);
			fornecedorRepository.save(fornecedor);
			return "Fornecedor atualizado! ";
		}

		return "Fornecedor não encontrado!";
	}

	@DeleteMapping(path="/excluir/{id}")
	public @ResponseBody String deleteFornecedorById(@PathVariable("id")Integer id) {
		if(fornecedorRepository.existsById(id)) {
			fornecedorRepository.deleteById(id);
			return "Fornecedor apagado com sucesso";
		}
		return "Fornecedor não encontrado para deleção, verifique o ID";
	}

}