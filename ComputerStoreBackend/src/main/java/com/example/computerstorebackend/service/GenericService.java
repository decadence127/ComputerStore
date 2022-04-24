package com.example.computerstorebackend.service;

import java.util.List;
import java.util.Optional;

public interface GenericService<E> {

    List<E> findAll();

    E save(E entity);

    E update(E entity);

    Optional<E> findById(Long id);

    void delete(E entity);

}
