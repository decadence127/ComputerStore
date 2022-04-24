package com.example.computerstorebackend.service;

import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.repository.GenericRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public abstract class GenericServiceImpl<E, R extends GenericRepository<E>> implements GenericService<E> {

    protected final R repo;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public GenericServiceImpl(R repo) {
        this.repo = repo;
    }

    @Override
    public Optional<E> findById(Long id) {
        return repo.findById(id);
    }

    @Override
    public List<E> findAll() {
        return repo.findAll();
    }

    @Override
    @Transactional
    public E save(E entity) {
        repo.save(entity);
        return entity;
    }

    @Override
    @Transactional
    public E update(E entity) {
        return entityManager.merge(entity);
    }

    @Override
    @Transactional
    public void delete(E entity) {
        repo.delete(entity);
    }

}
