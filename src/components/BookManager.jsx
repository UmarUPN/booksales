import React, { useState } from "react";
import books from "../utils/Books";
import styles from "./styles/BookManager.module.css";

function BookList() {
    const [bookList, setBooklist] = useState([...books]);
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        year: "",
        description: "",
        image: ""
    });

    // handler untuk input form
    const handleInputChange = (e) => { 
        const { name, value } = e.target; // destructuring
        setNewBook(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // handler untuk input form (tanpa destructuring)
    // const handleInputChange = (e) => {
    //     const fieldName = e.target.name;
    //     const fieldValue = e.target.value;
        
    //     setNewBook(prevState => ({
    //         ...prevState,
    //         [fieldName]: fieldValue
    //     }));
    // };

    // fungsi untuk menambah buku
    const addButton = () => {
        if (!newBook.title || !newBook.author || isNaN(newBook.year) || newBook.year <= 0) {
            alert("Judul, penulis, dan tahun harus diisi!");
            return;
        }

        const bookToAdd = {
            id: bookList.length + 1,
            title: newBook.title,
            author: newBook.author,
            year: parseInt(newBook.year) || 2023,
            description: newBook.description || "Deskripsi belum tersedia.",
            image: newBook.image || "https://placehold.co/222x700",
        };

        setBooklist((prevList) => [...prevList, bookToAdd]);
        
        // reset form
        setNewBook({
            title: "",
            author: "",
            year: "",
            description: "",
            image: ""
        });

        // tutup modal secara manual
        const modal = document.getElementById('addBookModal');
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal.hide();
    };

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Best-Selling Books You Can't Miss</h1>
                        <p className="lead text-body-secondary">
                            Discover a lineup of best-selling books that have captivated millions of readers around the world. From emotionally rich stories to eye-opening insights, this collection features top picks that have proven to inspire, entertain, and challenge perspectives. Don’t miss the chance to explore the titles that are making waves in the literary world.
                        </p>
                        <p>
                            <button 
                                type="button" 
                                className={`btn btn-warning my-2 ${styles.buttonAdd}`}
                                data-bs-toggle="modal" 
                                data-bs-target="#addBookModal"
                            >
                                Tambah buku
                            </button>
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {bookList.map((item) => (
                            <div className="col" key={item.id}>
                                <div className={`card shadow-sm ${styles.card}`}>
                                    <div className={styles.imageContainer}>
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className={styles.bookImage}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h5 className={styles.bookTitle}>{item.title}</h5>
                                        <p className={styles.bookInfo}>{`${item.author}, ${item.year}`}</p>
                                        <p className={`card-text ${styles.bookDesc}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* modal untuk menambah buku */}
            <div className="modal fade" id="addBookModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addBookModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addBookModalLabel">Tambah Buku Baru</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="inputJudul" className="form-label">Judul Buku</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputJudul"
                                    name="title"
                                    value={newBook.title}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan judul buku"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPenulis" className="form-label">Penulis</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputPenulis"
                                    name="author"
                                    value={newBook.author}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan nama penulis"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputTahun" className="form-label">Tahun Terbit</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="inputTahun"
                                    name="year"
                                    value={newBook.year}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan tahun terbit"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputDeskripsi" className="form-label">Deskripsi</label>
                                <textarea 
                                    className="form-control" 
                                    id="inputDeskripsi"
                                    name="description"
                                    value={newBook.description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    placeholder="Masukkan deskripsi buku"
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputGambar" className="form-label">URL Gambar</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputGambar"
                                    name="image"
                                    value={newBook.image}
                                    onChange={handleInputChange}
                                    placeholder="Masukkan URL gambar cover buku" // misal: https://picsum.photos/300/700
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={addButton}
                            >
                                Tambah Buku
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookList;