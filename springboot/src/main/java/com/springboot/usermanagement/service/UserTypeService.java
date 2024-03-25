package com.springboot.usermanagement.service;

import com.springboot.usermanagement.model.UserType;
import com.springboot.usermanagement.repository.UserTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserTypeService {

    @Autowired
    private UserTypeRepository userTypeRepository;

    public List<UserType> getAllUserTypes() {
        return userTypeRepository.findAll();
    }

    public UserType saveUserType(UserType userType) {
        return userTypeRepository.save(userType);
    }

    public UserType getUserTypeById(Long id) {
        return userTypeRepository.findById(id).orElse(null);
    }

    public UserType updateUserType(Long id, UserType userTypeDetails) {
        UserType userType = userTypeRepository.findById(id).orElse(null);
        if (userType != null) {
            userType.setName(userTypeDetails.getName());
            userTypeRepository.save(userType);
        }
        return userType;
    }

    public void deleteUserType(Long id) {
        userTypeRepository.deleteById(id);
    }
}
