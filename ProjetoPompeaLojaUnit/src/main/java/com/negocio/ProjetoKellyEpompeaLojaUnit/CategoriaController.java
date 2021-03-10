package com.negocio.ProjetoKellyEpompeaLojaUnit;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.basica.ProjetoKellyEpompeaLojaUnit.Categoria;
import com.repositorio.ProjetoKellyEpompeaLojaUnit.CategoriaRepositorio;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaRepositorio categoriaRepository;

	@PostMapping(path = "/add")
	public @ResponseBody String addNewCategoria(@RequestBody Categoria categoria) {
		categoriaRepository.save(categoria);
		return "Categoria Adicionado!";
	}

	@GetMapping(path = "/all") 
	public @ResponseBody Iterable<Categoria> getAllCategorias() {
		return categoriaRepository.findAll();
	}

	@GetMapping(path = "/find/{id}")
	public @ResponseBody Optional<Categoria> getCategoriaById(@PathVariable("id") Integer id) {
		return categoriaRepository.findById(id);
	}

	@PutMapping(path = "/update/{id}")
	public @ResponseBody String updateCategoria(@PathVariable("id") Integer id, @RequestBody Categoria categoria) {
		if (categoriaRepository.existsById(id)) {
			categoria.setId(id);
			categoriaRepository.save(categoria);
			return "Categoria atualizado!";
		}
		return "Categoria não encontrado!";
	}
	
	@DeleteMapping(path = "/delete/{id}")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public @ResponseBody String deleteCategoriaById(@PathVariable("id") Integer id) {
		if (categoriaRepository.existsById(id)) {
			categoriaRepository.deleteById(id);
			return "Categoria excluido!";
		}
		return "Categoria não encontrado!";
	}
}