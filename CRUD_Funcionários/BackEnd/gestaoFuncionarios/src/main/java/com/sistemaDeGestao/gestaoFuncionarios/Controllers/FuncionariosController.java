package com.sistemaDeGestao.gestaoFuncionarios.Controllers;


import com.sistemaDeGestao.gestaoFuncionarios.Model.Funcionarios;
import com.sistemaDeGestao.gestaoFuncionarios.Model.FuncionariosDto;
import com.sistemaDeGestao.gestaoFuncionarios.Repository.ModelRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/funcionarios")
@CrossOrigin(origins="*")
public class FuncionariosController {
    @Autowired
    private ModelRepository modelRepository;

    @GetMapping
    public ResponseEntity<List<Funcionarios>> exibirTabelaFuncionarios(){
        return ResponseEntity.status(HttpStatus.OK).body(modelRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> retornarFuncionario(@PathVariable(value="id") long id){
        Optional<Funcionarios> funcionario = modelRepository.findById(id);
        if(funcionario.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado");
        }
        return ResponseEntity.status(HttpStatus.OK).body(modelRepository.findById(id));
    }

    @GetMapping("/cargo")
    public ResponseEntity<Object> filtrarFuncionariosPorCargo(@PathVariable(value="cargo") String cargo){
        List<Funcionarios> funcionariosOptional = modelRepository.findAll();
        List<Funcionarios> funcionariosPorCargo = new ArrayList<>();
        funcionariosOptional.forEach(func -> {
            if(func.getCargo().equals(cargo)){
                funcionariosPorCargo.add(func);
            }
        });
        if(funcionariosPorCargo.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não existem funcionários deste cargo");
        }
        return ResponseEntity.status(HttpStatus.OK).body(funcionariosPorCargo);
    }

    @PostMapping
    public ResponseEntity<Funcionarios> registrarFuncionario(@RequestBody @Validated FuncionariosDto funcionarioDto){
        Funcionarios funcionario = new Funcionarios();
        BeanUtils.copyProperties(funcionarioDto, funcionario);
        return ResponseEntity.status(HttpStatus.CREATED).body(modelRepository.save(funcionario));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> actualizarFuncionario(@PathVariable(value = "id") long id, @RequestBody @Validated FuncionariosDto funcionariosDto){
        Optional<Funcionarios> funcionarioOptional = modelRepository.findById(id);
        if(funcionarioOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado");
        }
        Funcionarios funcionario = funcionarioOptional.get();
        BeanUtils.copyProperties(funcionariosDto, funcionario);
        return ResponseEntity.status(HttpStatus.OK).body(modelRepository.save(funcionario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarFuncionario(@PathVariable(value = "id") long id){
        Optional<Funcionarios> funcionarioOptional = modelRepository.findById(id);
        if(funcionarioOptional.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Funcionário não encontrado");
        }
        modelRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
