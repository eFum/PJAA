package com.springboot.usermanagement.repository;

import com.springboot.usermanagement.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTypeRepository extends JpaRepository<UserType, Long> {
}
