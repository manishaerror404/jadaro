const products = [
      { name: "Shinchan Float Mode Glass Case", image: "https://shoparccase.com/cdn/shop/files/shinchan1_eed7b7a6-60a4-4325-b7b1-032a1f1b2100.png?v=1775222355&width=1080", category: "cartoon", style: "cute", finish: "glass", price: 899, rating: 4.8, tag: "Bestseller" },
      { name: "Classic Cartoon Cat Burst Phone Cover Glass Case", image: "https://shoparccase.com/cdn/shop/files/tomandjerry1_14e84ae7-5dc7-4619-b04e-b61899b53347.png?v=1775292936&width=1080", category: "cartoon", style: "cute", finish: "glass", price: 899, rating: 4.7, tag: "Cartoon" },
      { name: "Money Talks Hustle Case Cover Glass Case", image: "https://shoparccase.com/cdn/shop/files/money1_4ff3cabc-2d26-4a6c-9996-c3aea422e7ce.png?v=1775288535&width=1080", category: "graphic", style: "bold", finish: "glass", price: 949, rating: 4.6, tag: "Bold" },
      { name: "Ultra-Clear Anti-Yellow MagSafe Case - White", image: "https://shoparccase.com/cdn/shop/files/3_1669ea36-a369-45ed-b947-98302ddc1a7d_1.png?v=1775291955&width=1080", category: "clear", style: "minimal", finish: "magsafe", price: 1199, rating: 4.9, tag: "MagSafe" },
      { name: "Pride of India Glass Case", image: "https://shoparccase.com/cdn/shop/files/INDIA1_c630f3f8-d452-472c-bdbc-0eb9e06c871b.png?v=1775293050&width=1080", category: "graphic", style: "bold", finish: "glass", price: 999, rating: 4.8, tag: "New" },
      { name: "Ultra-Clear Anti-Yellow MagSafe Case - Smokey", image: "https://shoparccase.com/cdn/shop/files/2_a87bf917-47cb-43cf-baa1-1d2549b11b3f_2.png?v=1775291555&width=1080", category: "clear", style: "minimal", finish: "magsafe", price: 1199, rating: 4.8, tag: "Premium" },
      { name: "RetroBot Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/27.jpg?v=1762804567&width=1080", category: "graphic", style: "bold", finish: "glass", price: 849, rating: 4.5, tag: "Printed" },
      { name: "Ultra-Clear Anti-Yellow MagSafe Case", image: "https://shoparccase.com/cdn/shop/files/2_a87bf917-47cb-43cf-baa1-1d2549b11b3f.png?v=1772830186&width=1080", category: "clear", style: "minimal", finish: "magsafe", price: 1099, rating: 4.7, tag: "Clear" },
      { name: "Alpha Claw Glass Case", image: "https://shoparccase.com/cdn/shop/files/1_999ef1c9-3beb-4f39-b8f4-32b7d5c8d6d3.jpg?v=1762804520&width=1080", category: "graphic", style: "bold", finish: "glass", price: 899, rating: 4.5, tag: "Graphic" },
      { name: "Romantic Rose Aesthetic Glass Case", image: "https://shoparccase.com/cdn/shop/files/rosemocup1.png?v=1776774942&width=1080", category: "aesthetic", style: "floral", finish: "glass", price: 949, rating: 4.8, tag: "Aesthetic" },
      { name: "Hello Kitty Patchwork Glass Case", image: "https://shoparccase.com/cdn/shop/files/helookitty1.png?v=1776773861&width=1080", category: "cartoon", style: "cute", finish: "glass", price: 999, rating: 4.9, tag: "Cute" },
      { name: "Ocean Swirl Aesthetic Glass Case", image: "https://shoparccase.com/cdn/shop/files/fish1_63efb14f-6f25-46d5-8cd9-2b20bd313f56.png?v=1776773166&width=1080", category: "aesthetic", style: "abstract", finish: "glass", price: 949, rating: 4.6, tag: "Ocean" },
      { name: "Cute Teddy Aesthetic Glass Case", image: "https://shoparccase.com/cdn/shop/files/behappy1.png?v=1776772999&width=1080", category: "aesthetic", style: "cute", finish: "glass", price: 899, rating: 4.7, tag: "Cute" },
      { name: "Minimal Bow Pattern Glass Case", image: "https://shoparccase.com/cdn/shop/files/ribbon1.png?v=1776772729&width=1080", category: "aesthetic", style: "minimal", finish: "glass", price: 849, rating: 4.5, tag: "Minimal" },
      { name: "Pink Lace Ribbon Glass Case", image: "https://shoparccase.com/cdn/shop/files/pinkribbon1.png?v=1776772517&width=1080", category: "aesthetic", style: "floral", finish: "glass", price: 899, rating: 4.7, tag: "Pink" },
      { name: "Pink Lips Aesthetic Glass Case", image: "https://shoparccase.com/cdn/shop/files/lipsandribbon1.png?v=1776772352&width=1080", category: "aesthetic", style: "bold", finish: "glass", price: 949, rating: 4.6, tag: "Trendy" },
      { name: "Clear Glass Aesthetic Glass Case", image: "https://shoparccase.com/cdn/shop/files/whitebackground1.png?v=1776772195&width=1080", category: "clear", style: "minimal", finish: "glass", price: 799, rating: 4.5, tag: "Clean" },
      { name: "Krishna Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/19.jpg?v=1762804575&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 899, rating: 4.8, tag: "Devotional" },
      { name: "Buddha Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/BuddhaCase.png?v=1762804597&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 899, rating: 4.8, tag: "Calm" },
      { name: "Kanha Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/31.jpg?v=1762804564&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 899, rating: 4.7, tag: "Kanha" },
      { name: "Mahadev Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/36.jpg?v=1762804560&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 899, rating: 4.9, tag: "Mahadev" },
      { name: "Radha Krishna Bliss Glass Case", image: "https://shoparccase.com/cdn/shop/files/KrishnaRadhaPrintediPhoneCase.jpg?v=1762804524&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 999, rating: 4.9, tag: "Premium" },
      { name: "Lord Krishna Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/41.jpg?v=1762804553&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 899, rating: 4.8, tag: "Krishna" },
      { name: "Radha Krishna Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/9.png?v=1762804588&width=1080", category: "devotional", style: "spiritual", finish: "glass", price: 949, rating: 4.8, tag: "Devotional" },
      { name: "Eclipse Printed Glass Case", image: "https://shoparccase.com/cdn/shop/files/4.jpg?v=1762804586&width=1080", category: "graphic", style: "abstract", finish: "glass", price: 899, rating: 4.6, tag: "Abstract" }
    ];

    const filterConfig = {
      category: ["all", "cartoon", "aesthetic", "devotional", "clear", "graphic"],
      style: ["all", "minimal", "cute", "bold", "floral", "abstract", "spiritual"],
      finish: ["all", "glass", "magsafe"]
    };
    const state = { category: "all", style: "all", finish: "all", search: "", sort: "featured", cart: [], wishlist: [] };
    const root = document.documentElement;
    const productsGrid = document.getElementById("productsGrid");
    const resultCount = document.getElementById("resultCount");
    const emptyState = document.getElementById("emptyState");
    const activeFilters = document.getElementById("activeFilters");
    const cartDrawer = document.getElementById("cartDrawer");
    const cartItems = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");
    const cartSubtotal = document.getElementById("cartSubtotal");
    const wishlistDrawer = document.getElementById("wishlistDrawer");
    const wishlistItems = document.getElementById("wishlistItems");
    const wishlistEmpty = document.getElementById("wishlistEmpty");

    function titleCase(value) {
      return value === "all" ? "All" : value.charAt(0).toUpperCase() + value.slice(1);
    }

    function icon(name) {
      const icons = {
        eye: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
        bagPlus: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/><path d="M12 12v5M9.5 14.5h5"/></svg>',
        heart: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 22l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/></svg>'
      };
      return icons[name] || "";
    }

    function encodeProductName(name) {
      return encodeURIComponent(name);
    }

    function findProductByName(name) {
      return products.find(product => product.name === name);
    }

    function isWishlisted(product) {
      return state.wishlist.some(item => item.name === product.name);
    }

    function renderFilters() {
      document.getElementById("filterGroups").innerHTML = Object.entries(filterConfig).map(([key, values]) => `
        <div class="filter-group">
          <strong>${titleCase(key)}</strong>
          <div class="chips">
            ${values.map(value => `<button class="chip ${state[key] === value ? "active" : ""}" type="button" data-group="${key}" data-value="${value}">${titleCase(value)}</button>`).join("")}
          </div>
        </div>
      `).join("");
    }

    function renderActiveFilters() {
      const crumbs = [];
      if (state.search) crumbs.push({ key: "search", label: `Search: ${state.search}` });
      ["category", "style", "finish"].forEach(key => {
        if (state[key] !== "all") crumbs.push({ key, label: `${titleCase(key)}: ${titleCase(state[key])}` });
      });
      if (state.sort !== "featured") {
        const sortLabel = document.querySelector(`#sortSelect option[value="${state.sort}"]`)?.textContent || titleCase(state.sort);
        crumbs.push({ key: "sort", label: `Sort: ${sortLabel}` });
      }

      activeFilters.innerHTML = crumbs.length
        ? crumbs.map(crumb => `<span class="crumb">${crumb.label}<button type="button" aria-label="Remove ${crumb.label}" data-crumb="${crumb.key}">x</button></span>`).join("")
        : '<span class="crumb">All covers</span>';
    }

    function getFilteredProducts() {
      const term = state.search.toLowerCase();
      let list = products.filter(product => {
        const matchesSearch = !term || `${product.name} ${product.category} ${product.style} ${product.finish}`.toLowerCase().includes(term);
        return matchesSearch
          && (state.category === "all" || product.category === state.category)
          && (state.style === "all" || product.style === state.style)
          && (state.finish === "all" || product.finish === state.finish);
      });

      if (state.sort === "price-low") list = list.sort((a, b) => a.price - b.price);
      if (state.sort === "price-high") list = list.sort((a, b) => b.price - a.price);
      if (state.sort === "rating") list = list.sort((a, b) => b.rating - a.rating);
      return list;
    }

    function renderProducts() {
      const list = getFilteredProducts();
      productsGrid.innerHTML = list.map((product, index) => `
        <article class="card product reveal visible">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}">
            <span class="badge">${product.tag}</span>
          </div>
          <div class="product-body">
            <h3>${product.name}</h3>
            <p class="muted">${titleCase(product.category)} style with ${titleCase(product.finish)} finish.</p>
            <div class="product-row">
              <span class="price">Rs. ${product.price}</span>
              <span class="rating">${product.rating} rating</span>
            </div>
            <div class="product-actions wide">
              <button class="icon-btn wishlist-toggle ${isWishlisted(product) ? "saved" : ""}" type="button" data-wishlist-name="${encodeProductName(product.name)}" aria-label="Add ${product.name} to wishlist">${icon("heart")}</button>
              <button class="btn btn-ghost" type="button" data-view="${index}">${icon("eye")} Quick View</button>
              <button class="btn btn-primary" type="button" data-add-name="${encodeProductName(product.name)}">${icon("bagPlus")} Add</button>
            </div>
          </div>
        </article>
      `).join("");
      resultCount.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
      emptyState.classList.toggle("show", list.length === 0);
      renderActiveFilters();
    }

    function updateShop() {
      renderFilters();
      renderProducts();
    }

    document.getElementById("filterGroups").addEventListener("click", event => {
      const button = event.target.closest(".chip");
      if (!button) return;
      state[button.dataset.group] = button.dataset.value;
      updateShop();
    });
    document.getElementById("searchInput").addEventListener("input", event => {
      state.search = event.target.value.trim();
      renderProducts();
    });
    document.getElementById("sortSelect").addEventListener("change", event => {
      state.sort = event.target.value;
      renderProducts();
    });
    document.getElementById("clearFilters").addEventListener("click", () => {
      state.category = "all";
      state.style = "all";
      state.finish = "all";
      state.search = "";
      state.sort = "featured";
      document.getElementById("searchInput").value = "";
      document.getElementById("sortSelect").value = "featured";
      updateShop();
    });
    activeFilters.addEventListener("click", event => {
      const button = event.target.closest("[data-crumb]");
      if (!button) return;
      const key = button.dataset.crumb;
      if (key === "search") {
        state.search = "";
        document.getElementById("searchInput").value = "";
      } else if (key === "sort") {
        state.sort = "featured";
        document.getElementById("sortSelect").value = "featured";
      } else {
        state[key] = "all";
      }
      updateShop();
    });

    const modal = document.getElementById("quickModal");
    let currentModalProduct = null;
    function openModal(product) {
      currentModalProduct = product;
      document.getElementById("modalImg").src = product.image;
      document.getElementById("modalImg").alt = product.name;
      document.getElementById("modalBadge").textContent = product.tag;
      document.getElementById("modalTitle").textContent = product.name;
      document.getElementById("modalDesc").textContent = `${titleCase(product.category)} cover designed for a polished everyday phone look.`;
      document.getElementById("modalFinish").textContent = titleCase(product.finish);
      document.getElementById("modalStyle").textContent = titleCase(product.style);
      document.getElementById("modalRating").textContent = `${product.rating} / 5`;
      document.getElementById("modalPrice").textContent = `Rs. ${product.price}`;
      document.getElementById("modalAdd").onclick = () => addToCart(currentModalProduct, true);
      document.getElementById("modalWishlist").onclick = () => toggleWishlist(currentModalProduct, true);
      modal.classList.add("open");
      document.body.classList.add("locked");
    }

    function formatPrice(value) {
      return `Rs. ${value.toLocaleString("en-IN")}`;
    }

    function getCartCount() {
      return state.cart.reduce((sum, item) => sum + item.qty, 0);
    }

    function renderCart() {
      document.getElementById("cartCount").textContent = getCartCount();
      cartEmpty.classList.toggle("show", state.cart.length === 0);
      cartItems.innerHTML = state.cart.map(item => `
        <article class="cart-item">
          <img src="${item.product.image}" alt="${item.product.name}">
          <div>
            <h3>${item.product.name}</h3>
            <div class="cart-item-price">${formatPrice(item.product.price)}</div>
            <div class="cart-controls">
              <div class="qty-control" aria-label="Quantity for ${item.product.name}">
                <button type="button" data-cart-dec="${item.product.name}" aria-label="Decrease quantity">-</button>
                <span>${item.qty}</span>
                <button type="button" data-cart-inc="${item.product.name}" aria-label="Increase quantity">+</button>
              </div>
              <button class="remove-cart" type="button" data-cart-remove="${item.product.name}">Remove</button>
            </div>
          </div>
        </article>
      `).join("");
      const subtotal = state.cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
      cartSubtotal.textContent = formatPrice(subtotal);
    }

    function setCartOpen(open) {
      cartDrawer.classList.toggle("open", open);
      cartDrawer.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("locked", open || wishlistDrawer.classList.contains("open") || modal.classList.contains("open") || document.getElementById("flashSaleModal")?.classList.contains("open"));
    }

    function setWishlistOpen(open) {
      wishlistDrawer.classList.toggle("open", open);
      wishlistDrawer.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("locked", open || cartDrawer.classList.contains("open") || modal.classList.contains("open") || document.getElementById("flashSaleModal")?.classList.contains("open"));
    }

    function addToCart(product, openCart = false) {
      if (!product) return;
      const existing = state.cart.find(item => item.product.name === product.name);
      if (existing) existing.qty += 1;
      else state.cart.push({ product, qty: 1 });
      renderCart();
      if (openCart) setCartOpen(true);
    }

    function renderWishlist() {
      document.getElementById("wishlistCount").textContent = state.wishlist.length;
      wishlistEmpty.classList.toggle("show", state.wishlist.length === 0);
      wishlistItems.innerHTML = state.wishlist.map(product => `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <div class="cart-item-price">${formatPrice(product.price)}</div>
            <div class="wishlist-actions">
              <button class="btn btn-primary" type="button" data-wishlist-cart="${encodeProductName(product.name)}">${icon("bagPlus")} Add</button>
              <button class="remove-cart" type="button" data-wishlist-remove="${encodeProductName(product.name)}">Remove</button>
            </div>
          </div>
        </article>
      `).join("");
    }

    function toggleWishlist(product, openWishlist = false) {
      if (!product) return;
      if (isWishlisted(product)) {
        state.wishlist = state.wishlist.filter(item => item.name !== product.name);
      } else {
        state.wishlist.push(product);
      }
      renderWishlist();
      renderProducts();
      if (openWishlist) setWishlistOpen(true);
    }

    productsGrid.addEventListener("click", event => {
      const visibleProducts = getFilteredProducts();
      const viewButton = event.target.closest("[data-view]");
      const addButton = event.target.closest("[data-add-name]");
      const wishlistButton = event.target.closest("[data-wishlist-name]");
      if (viewButton) openModal(visibleProducts[Number(viewButton.dataset.view)]);
      if (addButton) addToCart(findProductByName(decodeURIComponent(addButton.dataset.addName)), true);
      if (wishlistButton) toggleWishlist(findProductByName(decodeURIComponent(wishlistButton.dataset.wishlistName)), true);
    });
    document.getElementById("closeModal").addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.classList.remove("locked");
    });
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        modal.classList.remove("open");
        document.body.classList.remove("locked");
      }
    });

    document.getElementById("cartButton").addEventListener("click", () => setCartOpen(true));
    document.getElementById("closeCart").addEventListener("click", () => setCartOpen(false));
    document.getElementById("wishlistButton").addEventListener("click", () => setWishlistOpen(true));
    document.getElementById("closeWishlist").addEventListener("click", () => setWishlistOpen(false));
    cartDrawer.addEventListener("click", event => {
      if (event.target === cartDrawer) setCartOpen(false);
      const inc = event.target.closest("[data-cart-inc]");
      const dec = event.target.closest("[data-cart-dec]");
      const remove = event.target.closest("[data-cart-remove]");
      if (inc) {
        const item = state.cart.find(cartItem => cartItem.product.name === inc.dataset.cartInc);
        if (item) item.qty += 1;
        renderCart();
      }
      if (dec) {
        const item = state.cart.find(cartItem => cartItem.product.name === dec.dataset.cartDec);
        if (item) item.qty -= 1;
        state.cart = state.cart.filter(cartItem => cartItem.qty > 0);
        renderCart();
      }
      if (remove) {
        state.cart = state.cart.filter(cartItem => cartItem.product.name !== remove.dataset.cartRemove);
        renderCart();
      }
    });
    wishlistDrawer.addEventListener("click", event => {
      if (event.target === wishlistDrawer) setWishlistOpen(false);
      const add = event.target.closest("[data-wishlist-cart]");
      const remove = event.target.closest("[data-wishlist-remove]");
      if (add) addToCart(findProductByName(decodeURIComponent(add.dataset.wishlistCart)), true);
      if (remove) {
        state.wishlist = state.wishlist.filter(product => product.name !== decodeURIComponent(remove.dataset.wishlistRemove));
        renderWishlist();
        renderProducts();
      }
    });

    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");
    const navBackdrop = document.getElementById("navBackdrop");
    const categoryDropdown = document.getElementById("categoryDropdown");
    const dropdownTrigger = document.querySelector(".dropdown-trigger");

    function setNavOpen(open) {
      navMenu.classList.toggle("open", open);
      navBackdrop.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      if (!open) {
        categoryDropdown.classList.remove("open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
      }
    }

    function setActiveNav(sectionId) {
      document.querySelectorAll("[data-section-link]").forEach(link => {
        link.classList.toggle("active", link.dataset.sectionLink === sectionId);
      });
    }

    function toggleCollections(event) {
      event.preventDefault();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      event.stopPropagation();
      const open = categoryDropdown.classList.toggle("open");
      dropdownTrigger.setAttribute("aria-expanded", String(open));
    }
    window.toggleCollections = toggleCollections;

    menuToggle.addEventListener("click", () => setNavOpen(!navMenu.classList.contains("open")));
    navBackdrop.addEventListener("click", () => setNavOpen(false));
    navMenu.addEventListener("click", event => {
      if (event.target.closest(".dropdown-trigger")) toggleCollections(event);
    });
    document.querySelectorAll("[data-menu-filter]").forEach(link => {
      link.addEventListener("click", () => {
        state.category = link.dataset.menuFilter;
        updateShop();
        setActiveNav("shop");
        setNavOpen(false);
      });
    });
    document.querySelectorAll(".nav-link:not([data-menu-filter])").forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("href")?.replace("#", "");
        if (target) setActiveNav(target);
        setNavOpen(false);
      });
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        setNavOpen(false);
        setCartOpen(false);
        setWishlistOpen(false);
      }
    });
    const navSectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });
    ["home", "shop", "weather", "contact"].forEach(id => {
      const section = document.getElementById(id);
      if (section) navSectionObserver.observe(section);
    });
    document.getElementById("themeToggle").addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("jdaro-theme", root.dataset.theme);
    });
    const savedTheme = localStorage.getItem("jdaro-theme");
    if (savedTheme) root.dataset.theme = savedTheme;

    const flashModal = document.getElementById("flashSaleModal");
    const saleProducts = products.slice(0, 6);
    const saleEnd = Date.now() + (4 * 60 * 60 * 1000) + (59 * 60 * 1000);

    function renderSaleProducts() {
      document.getElementById("saleProducts").innerHTML = saleProducts.slice(0, 3).map((product, index) => `
        <article class="sale-product">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <strong>${product.name}</strong>
            <div class="small">Rs. ${product.price} - ${product.rating} rating</div>
            <button class="btn btn-ghost" type="button" data-sale-add-name="${encodeProductName(product.name)}">${icon("bagPlus")} Add to Bag</button>
          </div>
        </article>
      `).join("");
    }

    function setFlashOpen(open) {
      flashModal.classList.toggle("open", open);
      document.body.classList.toggle("locked", open || cartDrawer.classList.contains("open"));
    }

    function updateCountdown() {
      const remaining = Math.max(0, saleEnd - Date.now());
      const hours = String(Math.floor(remaining / 3600000)).padStart(2, "0");
      const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, "0");
      const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
      ["stripHours", "flashHours"].forEach(id => document.getElementById(id).textContent = hours);
      ["stripMinutes", "flashMinutes"].forEach(id => document.getElementById(id).textContent = minutes);
      ["stripSeconds", "flashSeconds"].forEach(id => document.getElementById(id).textContent = seconds);
    }

    document.getElementById("openFlashSale").addEventListener("click", () => setFlashOpen(true));
    document.getElementById("openSaleStrip").addEventListener("click", () => setFlashOpen(true));
    document.getElementById("closeFlashSale").addEventListener("click", () => setFlashOpen(false));
    flashModal.addEventListener("click", event => {
      if (event.target === flashModal) setFlashOpen(false);
    });
    document.getElementById("shopSaleCta").addEventListener("click", () => {
      state.category = "all";
      state.finish = "glass";
      state.search = "";
      updateShop();
      setFlashOpen(false);
    });
    document.getElementById("saleProducts").addEventListener("click", event => {
      const saleAdd = event.target.closest("[data-sale-add-name]");
      if (saleAdd) addToCart(findProductByName(decodeURIComponent(saleAdd.dataset.saleAddName)), true);
    });

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

    async function fetchWeather(city) {
      const status = document.getElementById("weatherStatus");
      status.textContent = "Fetching live weather...";
      try {
        const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
        const geoData = await geo.json();
        const place = geoData.results && geoData.results[0];
        if (!place) throw new Error("City not found");
        const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m`);
        const weatherData = await weather.json();
        document.getElementById("weatherCity").textContent = `${place.name}, ${place.country_code}`;
        document.getElementById("weatherTemp").textContent = `${Math.round(weatherData.current.temperature_2m)}\u00B0C`;
        document.getElementById("weatherHumidity").textContent = `${weatherData.current.relative_humidity_2m}%`;
        status.textContent = `Updated at ${new Date(weatherData.current.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
      } catch (error) {
        status.textContent = "Could not load weather. Check the city name or internet connection.";
      }
    }
    document.getElementById("weatherForm").addEventListener("submit", event => {
      event.preventDefault();
      fetchWeather(document.getElementById("cityInput").value.trim() || "Chandigarh");
    });

    function setError(id, message) { document.getElementById(id).textContent = message; }
    document.getElementById("contactForm").addEventListener("submit", event => {
      event.preventDefault();
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const category = document.getElementById("requestCategory").value;
      const type = document.querySelector("input[name='requestType']:checked");
      const message = document.getElementById("message").value.trim();
      let valid = true;
      ["nameError", "emailError", "phoneError", "categoryError", "typeError", "messageError"].forEach(id => setError(id, ""));
      document.getElementById("formResult").textContent = "";
      if (name.length < 3) { setError("nameError", "Enter at least 3 characters."); valid = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("emailError", "Enter a valid email."); valid = false; }
      if (!/^[6-9]\d{9}$/.test(phone)) { setError("phoneError", "Enter a valid 10 digit mobile number."); valid = false; }
      if (!category) { setError("categoryError", "Select a category."); valid = false; }
      if (!type) { setError("typeError", "Choose a request type."); valid = false; }
      if (message.length < 10) { setError("messageError", "Message must be at least 10 characters."); valid = false; }
      if (valid) {
        event.target.reset();
        document.getElementById("formResult").textContent = "Request validated successfully.";
      }
    });

    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", event => {
        event.preventDefault();
        const input = newsletterForm.querySelector("input");
        if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
          input.value = "";
          input.placeholder = "Subscribed successfully";
        } else if (input) {
          input.focus();
        }
      });
    }

    updateShop();
    renderCart();
    renderWishlist();
    renderSaleProducts();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    fetchWeather("Chandigarh");



