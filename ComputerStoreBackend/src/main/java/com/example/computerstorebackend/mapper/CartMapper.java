package com.example.computerstorebackend.mapper;

import com.example.computerstorebackend.dto.CartDTO;
import com.example.computerstorebackend.model.Cart;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {AccountMapper.class, OrderMapper.class})
public interface CartMapper {

    CartDTO toDto(Cart cart);

}
