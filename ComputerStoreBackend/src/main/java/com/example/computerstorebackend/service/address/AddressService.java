package com.example.computerstorebackend.service.address;

import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.service.GenericService;

import java.util.List;

public interface AddressService extends GenericService<Address> {

    List<Address> findByCity(String city);

    List<Address> findByStreet(String street);
}
