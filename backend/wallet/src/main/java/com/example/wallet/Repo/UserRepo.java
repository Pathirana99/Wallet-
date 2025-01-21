package com.example.wallet.Repo;

import com.example.wallet.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Integer> {
    List<User> findByRole(String user);

    long countByRole(String user);
}
