package com.products.product_display_api;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoeRepository extends JpaRepository<Shoe, Long> {
    
}