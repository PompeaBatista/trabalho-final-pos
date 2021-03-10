package com.basica.ProjetoKellyEpompeaLojaUnit;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table (name="faq")
public class Faq {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer idFaq;
	private String dataHora;
	private String texto;
	@ManyToOne
	@JoinColumn(name="id_Produto")
	private Produto produto;
	
	
	public Faq() {
		super();
	}
	public Produto getIdProduto() {
		return produto;
	}
	public void setIdProduto(Produto idProduto) {
		this.produto = idProduto;
	}
	public Integer getIdFaq() {
		return idFaq;
	}
	public void setIdFaq(Integer idFaq) {
		this.idFaq = idFaq;
	}
	public String getDataHora() {
		return dataHora;
	}
	public void setDataHora(String dataHora) {
		this.dataHora = dataHora;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public Produto getProduto() {
		return produto;
	}
	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	

}
