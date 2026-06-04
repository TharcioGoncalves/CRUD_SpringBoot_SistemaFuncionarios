package com.sistemaDeGestao.gestaoFuncionarios.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.antlr.v4.runtime.misc.NotNull;

public record FuncionariosDto(@NotBlank String nome, @NotBlank String cpf, @NotBlank String dataNascimento, @NotBlank String genero,
                              @NotBlank String telefone, @Email String email,@NotBlank String endereco,@NotBlank String bairro,
                              @NotBlank String cidade,@NotBlank String departamentos,@NotBlank String cargo,
                              @NotNull int salario, @NotBlank String estadoCivil) {
}
