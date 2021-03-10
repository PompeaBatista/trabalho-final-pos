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

import com.basica.ProjetoKellyEpompeaLojaUnit.Marca;
import com.repositorio.ProjetoKellyEpompeaLojaUnit.MarcaRepositorio;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/marcas")
public class MarcaController {

	@Autowired
	private MarcaRepositorio marcaRepository;

	@PostMapping(path = "/add")
	public @ResponseBody String addNewMarca(@RequestBody Marca marca) {
		marcaRepository.save(marca);
		return "Marca Adicionado!";
	}

	@GetMapping(path = "/all") 
	public @ResponseBody Iterable<Marca> getAllMarca() {
		return marcaRepository.findAll();
	}

	@GetMapping(path = "/find/{id}")
	public @ResponseBody Optional<Marca> getMarcaById(@PathVariable("id") Integer id) {
		return marcaRepository.findById(id);
	}

	@PutMapping(path = "/update/{id}")
	public @ResponseBody String updateMarca(@PathVariable("id") Integer id, @RequestBody Marca marca) {
		if (marcaRepository.existsById(id)) {
			marca.setId(id);
			marcaRepository.save(marca);
			return "Marca atualizado!";
		}
		return "Marca não encontrado!";
	}
	
	@DeleteMapping(path = "/delete/{id}")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public @ResponseBody String deleteMarcaById(@PathVariable("id") Integer id) {
		if (marcaRepository.existsById(id)) {
			marcaRepository.deleteById(id);
			return "Marca excluido!";
		}
		return "Marca não encontrado!";
	}
}


