package com.trueque.proyectointegrador.repository;

import com.trueque.proyectointegrador.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
