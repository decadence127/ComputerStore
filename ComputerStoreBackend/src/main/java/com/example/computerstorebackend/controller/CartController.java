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
@RequestMapping("/api")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CartController {

    private CartMapper cartMapper;
    private CartService cartService;

    @GetMapping("/cart/user/{id}")
    public ResponseEntity<CartDTO> getCart(@PathVariable Long id) {
        return ResponseEntity.ok(cartMapper.toDto(cartService.findByAccount_Id(id).orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id))));
    }

    @PostMapping("/cart")
    public Cart createCart(@RequestBody Cart cart) {
        return cartService.save(cart);
    }


//    @PutMapping("/cart/{id}")
//    public ResponseEntity<Cart> editAddress(@PathVariable Long id, @RequestBody Cart cart) {
//        Optional<Cart> c = addressService.findById(id);
//        Address addr = null;
//        if (a.isPresent()) {
//            addr = a.get();
//            addr.setCity(address.getCity());
//            addr.setStreet(address.getStreet());
//            addr.setHouseNumber(address.getHouseNumber());
//        }
//        return ResponseEntity.ok(addressService.update(addr));
//    }


    @GetMapping("/cart/{id}")
    public ResponseEntity<CartDTO> getCartById(@PathVariable Long id) {
        Optional<Cart> cart = cartService.findById(id);
        return ResponseEntity.ok(cartMapper.toDto(cart.orElseThrow(() -> new ResourceNotFoundException("Cart not found with id :" + id))));
    }

    @DeleteMapping("/cart/{id}")
    public ResponseEntity<Map<String, Boolean>> del(@PathVariable Long id) {
        Optional<Cart> cart = cartService.findById(id);
        cart.ifPresent(value -> cartService.delete(value));
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
