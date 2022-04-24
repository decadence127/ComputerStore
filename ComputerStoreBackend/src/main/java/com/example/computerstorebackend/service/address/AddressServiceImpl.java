package com.example.computerstorebackend.service.address;

import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.repository.AddressRepo;
import com.example.computerstorebackend.service.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl extends GenericServiceImpl<Address, AddressRepo> implements AddressService {

    @Autowired
    public AddressServiceImpl(AddressRepo repo) {
        super(repo);
    }

    @Override
    public List<Address> findByCity(String city) {
        return repo.findByCity(city);
    }

    @Override
    public List<Address> findByStreet(String street) {
        return repo.findByStreet(street);
    }
}
