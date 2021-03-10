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

import com.basica.ProjetoKellyEpompeaLojaUnit.Cliente;
import com.repositorio.ProjetoKellyEpompeaLojaUnit.ClienteRepositorio;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/clientes")
public class ClienteController {

	@Autowired
	private ClienteRepositorio clienteRepository;

	@PostMapping(path = "/add")
	public @ResponseBody String addNewCliente(@RequestBody Cliente cliente) {
		clienteRepository.save(cliente);
		return "Cliente Adicionado!";
	}

	@GetMapping(path = "/all") 
	public @ResponseBody Iterable<Cliente> getAllClientes() {
		return clienteRepository.findAll();
	}

	@GetMapping(path = "/find/{id}")
	public @ResponseBody Optional<Cliente> getClienteById(@PathVariable("id") Integer id) {
		return clienteRepository.findById(id);
	}

	@PutMapping(path = "/update/{id}")
	public @ResponseBody String updateCliente(@PathVariable("id") Integer id, @RequestBody Cliente cliente) {
		if (clienteRepository.existsById(id)) {
			cliente.setId(id);
			clienteRepository.save(cliente);
			return "Cliente atualizado!";
		}
		return "Cliente não encontrado!";
	}
	
	@DeleteMapping(path = "/delete/{id}")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public @ResponseBody String deleteClienteById(@PathVariable("id") Integer id) {
		if (clienteRepository.existsById(id)) {
			clienteRepository.deleteById(id);
			return "Cliente excluido!";
		}
		return "Cliente não encontrado!";
	}
}