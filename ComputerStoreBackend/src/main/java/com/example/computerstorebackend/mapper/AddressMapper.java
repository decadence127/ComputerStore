package com.example.computerstorebackend.mapper;

import com.example.computerstorebackend.dto.AddressDTO;
import com.example.computerstorebackend.model.Address;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AddressMapper {

    AddressDTO toDto(Address address);

    List<AddressDTO> toListDto(List<Address> addresses);
}
