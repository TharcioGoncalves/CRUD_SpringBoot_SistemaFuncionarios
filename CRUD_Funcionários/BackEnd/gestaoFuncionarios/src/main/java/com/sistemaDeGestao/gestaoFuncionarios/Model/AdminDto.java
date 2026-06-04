package com.sistemaDeGestao.gestaoFuncionarios.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record AdminDto(@Email String email, @NotBlank String senha) {
}
