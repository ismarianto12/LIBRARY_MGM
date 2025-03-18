package com.schoolibrary.Controllers;

import com.schoolibrary.Models.BookCatalog;
import com.schoolibrary.Models.BookRent;
import com.schoolibrary.Models.MemberModel;
import com.schoolibrary.Repository.BookRenRepository;
import com.schoolibrary.Repository.BookRepository;
import com.schoolibrary.Repository.MemberRepository;
import com.schoolibrary.Utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/bookrent")
public class RentBookController {

    @Autowired
    private BookRenRepository renbook;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private BookRepository bookRepository;

    @RequestMapping(value = "/pinjam", method = RequestMethod.POST)
    public ResponseEntity<?> Pinjam(@RequestBody Map<String, Object> payload) throws Exception {
        try {
            Long bookId = Long.parseLong(payload.get("book_id").toString());
            Long memberId = Long.valueOf(payload.get("member_id").toString());
            String email = payload.get("email").toString();

            Optional<MemberModel> getMemberdata = memberRepository.getDataByEmail(email);
            LocalDate rentDate = LocalDate.parse(payload.get("rent_date").toString().substring(0, 10));
            LocalDate returnDate = LocalDate.parse(payload.get("return_date").toString().substring(0, 10));

            BookCatalog book = bookRepository.findById(bookId)
                    .orElseThrow(() -> new RuntimeException("Book not found"));
            BookRent rentBook = new BookRent();
            rentBook.setRentDate(rentDate);
            rentBook.setBook(book);
            rentBook.setMember(getMemberdata.get());
            renbook.save(rentBook);
            CustomResponse customResponse = new CustomResponse("data successfuly get", "Success Peminjaman berhasil", 200);
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            e.printStackTrace();
            CustomResponse customResponse = new CustomResponse("data can\'t read", e.getMessage(), 200);
            return ResponseEntity.badRequest().body(customResponse);
        }
    }

    @RequestMapping(value = "/checkid", method = RequestMethod.POST)
    public ResponseEntity<?> CheckId(@RequestBody Map<String, String> payload) throws Exception {
        CustomResponse customResponse;
        try {
            Optional<MemberModel> data = memberRepository.getDataByEmail(payload.get("email"));
            if (data.isPresent()) {
                customResponse = new CustomResponse("data successfuly get", "data ada", 200);
            } else {
                customResponse = new CustomResponse("data successfuly get", "Success Peminjaman berhasil", 400);
            }
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            customResponse = new CustomResponse("data can\'t read", e.getMessage(), 400);
            return ResponseEntity.badRequest().body(customResponse);
        }
    }

}
