package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.AccountDTO;
import com.example.computerstorebackend.dto.AddressDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.AccountMapper;
import com.example.computerstorebackend.mapper.AddressMapper;
import com.example.computerstorebackend.model.Account;
import com.example.computerstorebackend.model.AccountData;
import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.model.Role;
import com.example.computerstorebackend.service.account.AccountService;
import com.example.computerstorebackend.service.address.AddressService;
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
@RequestMapping("/ComputerStore")
public class AddressController {

    private AddressMapper addressMapper;
    private AddressService addressService;

    @Autowired
    public AddressController(AddressMapper addressMapper, AddressService addressService) {
        this.addressMapper = addressMapper;
        this.addressService = addressService;
    }

    @GetMapping("/address")
    public List<Address> getAddresses() {
        return addressService.findAll();
    }

    @PostMapping("/address")
    public Address createAddress(@RequestBody Address address) {
        return addressService.save(address);
    }


    @PutMapping("/address/{id}")
    public ResponseEntity<Address> editAddress(@PathVariable Long id, @RequestBody Address address) {
        Optional<Address> a = addressService.findById(id);
        Address addr = null;
        if (a.isPresent()) {
            addr = a.get();
            addr.setCity(address.getCity());
            addr.setStreet(address.getStreet());
            addr.setHouseNumber(address.getHouseNumber());
        }
        return ResponseEntity.ok(addressService.update(addr));
    }


    @GetMapping("/address/{id}")
    public ResponseEntity<AddressDTO> getUserById(@PathVariable Long id) {
        Optional<Address> address = addressService.findById(id);
        return ResponseEntity.ok(addressMapper.toDto(address.orElseThrow(() -> new ResourceNotFoundException("Address not found with id :" + id))));
    }

    @DeleteMapping("/address/{id}")
    public ResponseEntity<Map<String, Boolean>> del(@PathVariable Long id) {
        Optional<Address> address = addressService.findById(id);
        address.ifPresent(value -> addressService.delete(value));
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }
}
