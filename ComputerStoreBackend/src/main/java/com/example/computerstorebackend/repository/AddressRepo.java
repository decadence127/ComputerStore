package com.example.computerstorebackend.repository;

import com.example.computerstorebackend.model.Address;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepo extends GenericRepository<Address> {

    List<Address> findByCity(String city);

    List<Address> findByStreet(String street);

}
