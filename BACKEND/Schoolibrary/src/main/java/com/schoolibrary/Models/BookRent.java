package com.schoolibrary.Models;
import javax.persistence.*;
import com.schoolibrary.Models.MemberModel;
import java.time.LocalDate;
import java.util.Date;


@Entity
@Table(name = "book_rent")
public class BookRent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false)
    private MemberModel member;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private BookCatalog book;

    @Column(name= "rent_date", nullable = false)
    private LocalDate rentDate;

    @Column(nullable = false)
    private LocalDate returnDate;


    public Date getCreatedAt() {
        return CreatedAt;
    }

    public void setCreatedAt(Date createdAt) {
        CreatedAt = createdAt;
    }

    public Date getUpdatedAt() {
        return UpdatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        UpdatedAt = updatedAt;
    }

    public String getUserId() {
        return UserId;
    }

    public void setUserId(String userId) {
        UserId = userId;
    }

    @Column(name = "creted_at" )
    private Date CreatedAt;

    @Column(name = "updated_at" )
    private Date UpdatedAt;

    @Column(name = "user_id" )
    private String UserId;


    public BookRent() {
    }

    public BookRent(MemberModel member, BookCatalog book, LocalDate rentDate, LocalDate returnDate) {
        this.member = member;
        this.book = book;
        this.rentDate = rentDate;
        this.returnDate = returnDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MemberModel getMember() {
        return member;
    }

    public void setMember(MemberModel member) {
        this.member = member;
    }

    public BookCatalog getBook() {
        return book;
    }

    public void setBook(BookCatalog book) {
        this.book = book;
    }

    public LocalDate getRentDate() {
        return rentDate;
    }

    public void setRentDate(LocalDate rentDate) {
        this.rentDate = rentDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }
}
