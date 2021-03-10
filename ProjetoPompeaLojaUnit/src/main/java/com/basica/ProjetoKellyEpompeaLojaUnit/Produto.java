package com.basica.ProjetoKellyEpompeaLojaUnit;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (name="produto")
public class Produto implements Serializable{
	private static final long serialVersionUID = 210528805585127599L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String descricao;
	private double precoUnitario;
	private Integer unidade;
	//@OneToMany(mappedBy = "produto")
	//private List<Faq> faqs;
	@ManyToOne
	@JoinColumn(name="id_categoria")
	private Categoria categoria;
	@ManyToOne
	@JoinColumn(name = "id_fornecedor")
	private Fornecedor fornecedor;
	@ManyToOne
	@JoinColumn(name = "id_marca")
	private Marca marca;
	

	public Produto() {
		super();
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public double getPrecoUnitario() {
		return precoUnitario;
	}


	public void setPrecoUnitario(double precoUnitario) {
		this.precoUnitario = precoUnitario;
	}


	public Integer getUnidade() {
		return unidade;
	}


	public void setUnidade(Integer unidade) {
		this.unidade = unidade;
	}


	/*public List<Faq> getFaqs() {
		return faqs;
	}


	public void setFaqs(List<Faq> faqs) {
		this.faqs = faqs;
	}*/


	public Categoria getCategoria() {
		return categoria;
	}


	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}


	public Fornecedor getFornecedor() {
		return fornecedor;
	}


	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}


	public Marca getMarca() {
		return marca;
	}


	public void setMarca(Marca marca) {
		this.marca = marca;
	}
	
}