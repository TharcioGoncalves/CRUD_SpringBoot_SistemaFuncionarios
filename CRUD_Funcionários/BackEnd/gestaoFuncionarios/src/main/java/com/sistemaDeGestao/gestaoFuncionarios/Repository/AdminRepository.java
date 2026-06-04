package com.sistemaDeGestao.gestaoFuncionarios.Repository;

import com.sistemaDeGestao.gestaoFuncionarios.Model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Administrador, Long> {
}
