package com.schoolibrary.Repository;

import com.schoolibrary.Models.BookCatalog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<BookCatalog, Long> {
}
