package com.springboot.usermanagement.controller;

import com.springboot.usermanagement.model.UserType;
import com.springboot.usermanagement.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/userTypes")
public class UserTypeController {

    @Autowired
    private UserTypeService userTypeService;

    @GetMapping
    public List<UserType> getAllUserTypes() {
        return userTypeService.getAllUserTypes();
    }

    @PostMapping
    public UserType createUserType(@RequestBody UserType userType) {
        return userTypeService.saveUserType(userType);
    }

    @GetMapping("/{id}")
    public UserType getUserTypeById(@PathVariable Long id) {
        return userTypeService.getUserTypeById(id);
    }

    @PutMapping("/{id}")
    public UserType updateUserType(@PathVariable Long id, @RequestBody UserType userTypeDetails) {
        return userTypeService.updateUserType(id, userTypeDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserType(@PathVariable Long id) {
        userTypeService.deleteUserType(id);
        return ResponseEntity.ok().build();
    }
}
