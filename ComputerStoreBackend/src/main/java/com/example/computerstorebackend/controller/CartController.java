package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.AddressDTO;
import com.example.computerstorebackend.dto.CartDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.AddressMapper;
import com.example.computerstorebackend.mapper.CartMapper;
import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.model.Cart;
import com.example.computerstorebackend.service.address.AddressService;
import com.example.computerstorebackend.service.cart.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ComputerStore")
public class CartController {

    private CartMapper cartMapper;
    private CartService cartService;

    @Autowired
    public CartController(CartMapper cartMapper, CartService cartService) {
        this.cartMapper = cartMapper;
        this.cartService = cartService;
    }

    @GetMapping("/cart/user/{id}")
    public ResponseEntity getCart(@PathVariable Long id) {
        return ResponseEntity.ok(cartMapper.toDto(cartService.findByAccount_Id(id).orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id))));
    }

    @PostMapping("/cart")
    public ResponseEntity createCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.save(cart));
    }


    @PutMapping("/cart/{id}")
    public ResponseEntity editCart(@PathVariable Long id, @RequestBody Cart cart) {
        Optional<Cart> optionalCart = cartService.findById(id);
        Cart c = optionalCart.orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id));
        c.setCommodities(cart.getCommodities());
        return ResponseEntity.ok(cartMapper.toDto(cartService.update(c)));
    }


    @GetMapping("/cart/{id}")
    public ResponseEntity getCartById(@PathVariable Long id) {
        Optional<Cart> cart = cartService.findById(id);
        return ResponseEntity.ok(cartMapper.toDto(cart.orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id))));
    }

    @DeleteMapping("/cart/{id}")
    public ResponseEntity del(@PathVariable Long id) {
        Optional<Cart> cart = cartService.findById(id);
        Cart c = cart.orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id));
        cartService.delete(c);
        return new ResponseEntity<>("Successful operation", HttpStatus.OK);
    }
}
