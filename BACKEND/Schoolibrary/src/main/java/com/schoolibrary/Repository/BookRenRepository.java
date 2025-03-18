package com.schoolibrary.Repository;

import com.schoolibrary.Models.BookRent;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BookRenRepository extends JpaRepository<BookRent, Long> {
}
