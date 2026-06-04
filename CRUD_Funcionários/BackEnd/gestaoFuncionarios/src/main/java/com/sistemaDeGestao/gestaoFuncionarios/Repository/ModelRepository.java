package com.sistemaDeGestao.gestaoFuncionarios.Repository;

import com.sistemaDeGestao.gestaoFuncionarios.Model.Funcionarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ModelRepository extends JpaRepository<Funcionarios, Long> {
}
