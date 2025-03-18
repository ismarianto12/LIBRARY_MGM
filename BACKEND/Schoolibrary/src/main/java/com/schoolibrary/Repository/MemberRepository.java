package com.schoolibrary.Repository;

import com.schoolibrary.Models.MemberModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberModel, Long> {

//    @Query(value = "select * from memebers where email like '%:email%'", nativeQuery = true);
//    Optional<MemberModel> getDataByEmail(@Param("email") String email);

    @Query(value = "SELECT * FROM members WHERE email LIKE CONCAT('%', :email, '%')", nativeQuery = true)
    Optional<MemberModel> getDataByEmail(@Param("email") String email);


}
