package com.example.computerstorebackend.service.commodity;

import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.service.GenericService;

import java.util.List;

public interface CommodityService extends GenericService<Commodity> {

    List<Commodity> findByName(String name);
}
