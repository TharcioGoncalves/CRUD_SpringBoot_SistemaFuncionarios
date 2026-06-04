package com.sistemaDeGestao.gestaoFuncionarios.Controllers;

import com.sistemaDeGestao.gestaoFuncionarios.Model.AdminDto;
import com.sistemaDeGestao.gestaoFuncionarios.Model.Administrador;
import com.sistemaDeGestao.gestaoFuncionarios.Repository.AdminRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/administrador")
@CrossOrigin(origins = "*")
public class AdminController {
    @Autowired
    AdminRepository adminRepository;

    @GetMapping
    public ResponseEntity<List<Administrador>> buscarAdministradores(){
        return ResponseEntity.status(HttpStatus.OK).body(adminRepository.findAll());
    }
    @PostMapping
    public ResponseEntity<Administrador> criarAdministrador(@RequestBody @Validated AdminDto adminDto){
        Administrador administrador = new Administrador();
        BeanUtils.copyProperties(adminDto, administrador);
        return ResponseEntity.status(HttpStatus.CREATED).body(adminRepository.save(administrador));
    }
}
