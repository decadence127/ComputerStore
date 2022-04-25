package com.example.computerstorebackend.mapper;

import com.example.computerstorebackend.dto.CommodityDTO;
import com.example.computerstorebackend.model.Commodity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommodityMapper {

    CommodityDTO toDto(Commodity commodity);

    List<CommodityDTO> toListDto(List<Commodity> commodities);
}
