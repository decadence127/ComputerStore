package com.example.computerstorebackend.controller;

import com.example.computerstorebackend.dto.AddressDTO;
import com.example.computerstorebackend.dto.CommodityDTO;
import com.example.computerstorebackend.exception.ResourceNotFoundException;
import com.example.computerstorebackend.mapper.AddressMapper;
import com.example.computerstorebackend.mapper.CommodityMapper;
import com.example.computerstorebackend.model.Address;
import com.example.computerstorebackend.model.Commodity;
import com.example.computerstorebackend.service.address.AddressService;
import com.example.computerstorebackend.service.commodity.CommodityService;
import com.example.computerstorebackend.utils.FileUploadUtil;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ComputerStore")
public class CommodityController {

    private final static String path = System.getProperty("user.dir") + File.separator + "src" + File.separator + "main" + File.separator + "resources" + File.separator + "images";


    private CommodityMapper commodityMapper;
    private CommodityService commodityService;

    @Autowired
    public CommodityController(CommodityMapper commodityMapper, CommodityService commodityService) {
        this.commodityMapper = commodityMapper;
        this.commodityService = commodityService;
    }

    @GetMapping("/commodity")
    public List<Commodity> getCommodities() {
        System.out.println("called");
        return commodityService.findAll();
    }

    @PostMapping("/commodity")
    public ResponseEntity createCommodity(@RequestBody Commodity commodity) {
        return ResponseEntity.ok(commodityService.save(commodity));
    }

    @PostMapping(value = "/commodity/{commodityId}/photo",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity addPhoto(
//            @RequestParam(value = "image") String imageUrl,
            @RequestParam(value = "image", required = false) MultipartFile image,
            @PathVariable Long commodityId) {
        Optional<Commodity> optionalCommodity = commodityService.findById(commodityId);
        if (optionalCommodity.isPresent()) {
            Commodity commodity = optionalCommodity.get();
            Date date = new Date();
            String fileName = date.getTime() + ".jpg";
            String uploadDir = System.getProperty("user.dir") + File.separator + "src" + File.separator + "main" + File.separator + "resources" + File.separator + "images";

            FileUploadUtil.saveFile(path, fileName, image);

//            commodity.setImageUrl(imageUrl);
            commodity.setImageUrl(fileName);
            commodityService.update(commodity);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/commodity/photo/{filename}",
            produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getPhotoByPath(@PathVariable("filename") String filename) {
        byte[] byteImage;
        try {
            File file = new File(path + File.separator + filename);
            byteImage = Base64.getEncoder().encode(FileUtils.readFileToByteArray(file));
            return byteImage;
        } catch (IOException exception) {
            exception.printStackTrace();
        }

        return new byte[0];
    }


    @PutMapping("/commodity/{id}")
    public ResponseEntity editCommodity(@PathVariable Long id, @RequestBody Commodity commodity) {
        Optional<Commodity> c = commodityService.findById(id);
        Commodity com = c.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id));
        com.setName(commodity.getName());
        com.setPrice(commodity.getPrice());
        com.setDescription(commodity.getDescription());
        com.setQuantity(commodity.getQuantity());
        return ResponseEntity.ok(commodityService.update(com));
    }


    @GetMapping("/commodity/{id}")
    public ResponseEntity getCommodityById(@PathVariable Long id) {
        Optional<Commodity> commodity = commodityService.findById(id);
        return ResponseEntity.ok(commodityMapper.toDto(commodity.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id))));
    }

    @DeleteMapping("/commodity/{id}")
    public ResponseEntity del(@PathVariable Long id) {
        Optional<Commodity> commodity = commodityService.findById(id);
        Commodity c = commodity.orElseThrow(() -> new ResourceNotFoundException("Commodity not found with id :" + id));
        commodityService.delete(c);
        HashMap<String, String> response = new HashMap<>();
        response.put("status", OK.toString());
        response.put("msg", "Device has been deleted!");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
