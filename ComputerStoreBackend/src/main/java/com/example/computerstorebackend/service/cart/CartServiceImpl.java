package com.example.computerstorebackend.service.cart;

import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.repository.CartRepo;
import com.example.computerstorebackend.service.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartServiceImpl extends GenericServiceImpl<Cart, CartRepo> implements CartService{

    @Autowired
    public CartServiceImpl(CartRepo repo) {
        super(repo);
    }

    @Override
    public Optional<Cart> findByAccount_Id(Long id) {
        return repo.findByAccount_Id(id);
    }
}
