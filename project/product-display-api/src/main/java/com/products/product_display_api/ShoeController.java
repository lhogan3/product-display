package com.products.product_display_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shoes")
public class ShoeController {

    @Autowired
    private ShoeRepository shoeRepository;

    @GetMapping
    public List<Shoe> getAllShoes() {
        return shoeRepository.findAll();
    }

    @PostMapping
    public Shoe createShoe(@RequestBody Shoe shoe) {
        return shoeRepository.save(shoe);
    }
}