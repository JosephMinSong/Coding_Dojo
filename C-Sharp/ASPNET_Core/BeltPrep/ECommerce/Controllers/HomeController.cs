using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using ECommerce.Models;

namespace ECommerce.Controllers;

// Separate all routes by category (Customer, Products, Orders)

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private MyContext db;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;

        db = context;
    }

    // HOME PAGE
    [HttpGet("")]
    public IActionResult Index()
    {   
        MyHomeModel ViewModel = new MyHomeModel
        {
            AllProducts = db.Products
                                .OrderByDescending(x => x.CreatedAt)
                                .Take(5)
                                .ToList(),

            AllCustomers = db.Customers
                                .OrderByDescending(x => x.CreatedAt)
                                .Take(3)
                                .ToList(),

            AllOrders = db.Orders
                                .Include(x => x.Customer)
                                .Include(x => x.Product)
                                .OrderByDescending(x => x.CreatedAt)
                                .Take(3)
                                .ToList()
        };
        return View(ViewModel);
    }

    // -----------------------------CUSTOMER ROUTES-------------------------------------
    // Customer homepage
    [HttpGet("customers")]
    public IActionResult Customers()
    {
        CustomerViewModel ViewModel = new CustomerViewModel
        {
            allCustomers = db.Customers
                                .OrderByDescending(x => x.CreatedAt)
                                .ToList()
        };
        return View(ViewModel);
    }

    // Create customer
    [HttpPost("customers/create")]
    public IActionResult CreateCustomer(Customer newCustomer)
    {
        if(!ModelState.IsValid)
        {
            CustomerViewModel ViewModel = new CustomerViewModel
            {
                allCustomers = db.Customers
                                    .OrderByDescending(x => x.CreatedAt)
                                    .ToList()
            };
            return View("Customers", ViewModel);
        }

        db.Customers.Add(newCustomer);
        db.SaveChanges();
        return RedirectToAction("Customers");
    }

    // Delete customer
    [HttpPost("customers/{CustomerId}/delete")]
    public IActionResult DeleteCustomer(int CustomerId)
    {
        Customer? existingCustomer = db.Customers.FirstOrDefault(x => x.CustomerId == CustomerId);
        if(existingCustomer != null)
        {
            db.Customers.Remove(existingCustomer);
            db.SaveChanges();
            return RedirectToAction("Customers");
        }
        else
        {
            return RedirectToAction("Customers");
        }
    }

    // -------------------------------------PRODUCT ROUTES----------------------------------
    // Products homepage
    [HttpGet("products")]
    public IActionResult Products()
    {
        ProductViewModel ViewModel = new ProductViewModel
        {
            allProducts = db.Products
                                .OrderByDescending(x => x.CreatedAt)
                                .ToList()
        };
        return View(ViewModel);
    }

    // Create product
    [HttpPost("products/create")]
    public IActionResult CreateProduct(Product newProduct)
    {
        if(!ModelState.IsValid)
        {
            ProductViewModel ViewModel = new ProductViewModel
            {
                allProducts = db.Products
                                    .OrderByDescending(x => x.CreatedAt)
                                    .ToList()
            };
            return View("Products", ViewModel);
        }

        db.Products.Add(newProduct);
        db.SaveChanges();
        return RedirectToAction("Products");
    }

    // --------------------------------ORDERS ROUTE------------------------------------
    // Orders homepage
    [HttpGet("orders")]
    public IActionResult Orders()
    {
        OrderViewModel ViewModel = new OrderViewModel
        {
            allOrders = db.Orders
                            .Include(x => x.Product)
                            .Include(x => x.Customer)
                            .OrderByDescending(x => x.CreatedAt)
                            .ToList(),
            allProducts = db.Products
                                .ToList(),

            allCustomers = db.Customers
                                .ToList()
        };
        return View(ViewModel);
    }

    // Create order
    [HttpPost("orders/create")]
    public IActionResult CreateOrder(Order newOrder)
    {   
        //Store ViewModel here and then pass it to rest of route
        if(!ModelState.IsValid)
        {
            OrderViewModel ViewModel = new OrderViewModel
            {
                allOrders = db.Orders
                                .Include(x => x.Product)
                                .Include(x => x.Customer)
                                .OrderByDescending(x => x.CreatedAt)
                                .ToList(),
                allProducts = db.Products
                                    .ToList(),

                allCustomers = db.Customers
                                    .ToList()
            };
            return View("Orders", ViewModel);
        }

        Product? existingProduct = db.Products
                                    .FirstOrDefault(x => x.ProductId == newOrder.ProductId);

        if(existingProduct != null)
        {
            existingProduct.ProductQuantity -= newOrder.OrderQuantity;
            if(existingProduct.ProductQuantity < 0)
            {
                ModelState.AddModelError("newOrder.OrderQuantity", $"Not enough product stock. There are only {existingProduct.ProductQuantity + newOrder.OrderQuantity} left");
                OrderViewModel ViewModel = new OrderViewModel
                {
                    allOrders = db.Orders
                                    .Include(x => x.Product)
                                    .Include(x => x.Customer)
                                    .OrderByDescending(x => x.CreatedAt)
                                    .ToList(),
                    allProducts = db.Products
                                        .ToList(),

                    allCustomers = db.Customers
                                        .ToList()
                };
                return View("Orders", ViewModel);
                }
            db.Products.Update(existingProduct);
            db.Orders.Add(newOrder);
            db.SaveChanges();
            return RedirectToAction("Orders");
        }
        else
        {
            ModelState.AddModelError("newOrder.OrderQuantity", "Sorry, we could not find this product in our database.");
            OrderViewModel ViewModel = new OrderViewModel
            {
                allOrders = db.Orders
                                .Include(x => x.Product)
                                .Include(x => x.Customer)
                                .OrderByDescending(x => x.CreatedAt)
                                .ToList()
            };
            return View("Orders", ViewModel);
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
