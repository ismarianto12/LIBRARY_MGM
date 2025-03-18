package com.schoolibrary.Controllers;

import com.schoolibrary.Models.BookRent;
import com.schoolibrary.Models.MemberModel;
import com.schoolibrary.Repository.MemberRepository;
import com.schoolibrary.Utils.CustomResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/member")
public class MemberController {

    @Autowired
    private MemberRepository memberrepo;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> daftar(@RequestBody MemberModel rent) throws Exception {
        try {
            memberrepo.save(rent);
            CustomResponse customResponse = new CustomResponse("data successfuly get", "Success Peminjaman berhasil", 200);
            return ResponseEntity.ok().body(customResponse);
        } catch (Exception e) {
            CustomResponse customResponse = new CustomResponse("data can\'t read", e.getMessage(), 200);
            return ResponseEntity.badRequest().body(customResponse);
        }
    }
}
