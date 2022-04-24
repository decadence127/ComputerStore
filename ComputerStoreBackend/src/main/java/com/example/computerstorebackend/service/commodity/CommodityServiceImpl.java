package com.example.computerstorebackend.service.commodity;

import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.repository.CommodityRepo;
import com.example.computerstorebackend.service.GenericServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommodityServiceImpl extends GenericServiceImpl<Commodity, CommodityRepo> implements CommodityService {

    @Autowired
    public CommodityServiceImpl(CommodityRepo repo) {
        super(repo);
    }

    @Override
    public List<Commodity> findByName(String name) {
        return repo.findByName(name);
    }
}
