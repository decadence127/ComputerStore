package com.example.computerstorebackend.mapper;

import com.example.computerstorebackend.dto.OrderDTO;
import com.example.computerstorebackend.model.Order;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {CommodityMapper.class, AddressMapper.class})
public interface OrderMapper {

    OrderDTO toDto(Order order);

    List<OrderDTO> toListDto(List<Order> orders);
}
