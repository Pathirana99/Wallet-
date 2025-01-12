package com.example.wallet.Repo;

import com.example.wallet.Entity.User; // Your custom User entity
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepo extends JpaRepository<User, Integer> {
    User findByEmail(String email); // Maps to your custom User entity
}
