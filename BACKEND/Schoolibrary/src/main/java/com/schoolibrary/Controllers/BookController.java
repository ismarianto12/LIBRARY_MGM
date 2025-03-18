package com.schoolibrary.Controllers;

import com.schoolibrary.Models.BookCatalog;
import com.schoolibrary.Repository.BookRenRepository;
import com.schoolibrary.Repository.BookRepository;
import com.schoolibrary.Utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.Principal;
import java.util.*;


@RequestMapping("/api/v1/masterbuku")
@RestController
public class BookController {


    @Autowired
    BookRepository bookrepo;
    private final String UPLOAD_DIR = "uploads/";

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public ResponseEntity<?> Index() throws Exception {
        try {
            List<BookCatalog> data = bookrepo.findAll();
            CustomResponse customResponse = new CustomResponse("data successfuly get", data, 200);
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            CustomResponse customResponse = new CustomResponse("data can\'t read", e.getMessage(), 200);
            return ResponseEntity.badRequest().body(customResponse);
        }
    }

    @RequestMapping(value = "/store", method = RequestMethod.POST)
    public ResponseEntity<?> store(@Param("author") String author, @Param("title") String title, @Param("isbn") String isbn, @RequestParam("image") MultipartFile image) throws Exception {
        try {
            Map<String, Object> data = new HashMap<>();
            if (image.isEmpty()) {
                data.put("error", "Image is required.");
                return ResponseEntity.badRequest().body(data);
            }
            String imageName = StringUtils.cleanPath(image.getOriginalFilename());
            Path targetLocation = Paths.get(UPLOAD_DIR + imageName);
            try {
                Files.copy(image.getInputStream(), targetLocation);
            } catch (IOException e) {
                data.put("error", "Error uploading image.");
                return ResponseEntity.status(500).body(data);
            }
            BookCatalog book = new BookCatalog();
            book.setAuthor(author);
            book.setTitle(title);
            book.setImage(imageName);
            book.setIsbn(isbn);
            bookrepo.save(book);
            CustomResponse customResponse = new CustomResponse("data successfuly get", "success", 200);
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            CustomResponse customResponse = new CustomResponse("data can\'t read", e.getMessage(), 200);
            return ResponseEntity.badRequest().body(customResponse);

        }
    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody BookCatalog bookcatalog, @PathVariable("id") Long id) {
        try {
            Optional<BookCatalog> bookData = bookrepo.findById(id);

            if (bookData.isPresent()) {
                BookCatalog existingBook = bookData.get();
                existingBook.setTitle(bookcatalog.getTitle());
                existingBook.setAuthor(bookcatalog.getAuthor());
                bookrepo.save(existingBook);
                CustomResponse customResponse = new CustomResponse("data successfully updated", "", 200);
                return ResponseEntity.ok().body(customResponse);
            } else {
                CustomResponse customResponse = new CustomResponse("Book not found", "", 404);
                return ResponseEntity.status(404).body(customResponse);
            }
        } catch (Exception e) {
            CustomResponse customResponse = new CustomResponse("Data update failed", e.getMessage(), 400);
            return ResponseEntity.badRequest().body(customResponse);
        }
    }


    @RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> showData(@PathVariable Long id) throws Exception {
        try {
            Optional<BookCatalog> datanya = bookrepo.findById(id);
            CustomResponse customResponse = new CustomResponse("data successfuly get", datanya, 200);
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            CustomResponse customResponse = new CustomResponse("data can\'t read", e.getMessage(), 200);
            return ResponseEntity.badRequest().body(customResponse);
        }
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable Long id) throws Exception {
        try {

            CustomResponse customResponse = new CustomResponse("data successfuly get", "succes delete", 200);
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            CustomResponse customResponse = new CustomResponse("data can\'t read", e.getMessage(), 200);
            return ResponseEntity.badRequest().body(customResponse);

        }
    }

    @RequestMapping(value = "/report/masterbiaya", method = RequestMethod.GET)
    public ResponseEntity<?> reportMasterBiaya(@RequestParam("dari") String dari, @RequestParam("sampai") String Sampai) {
        try {
            return null;
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @RequestMapping(value = "satuanmasterbiaya", method = RequestMethod.POST)
    ResponseEntity<?> detailSatuanMasterBiaya() {
        try {
            Map<String, Object> mapping = new HashMap<>();
            List<Map<String, Object>> data = new ArrayList<>();
            mapping.put("data", data);
            mapping.put("response", HttpHeaders.ACCEPT);

            return ResponseEntity.ok().body(mapping);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e);
        }
    }


}
