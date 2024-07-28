document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const authSection = document.getElementById('auth');
    const dashboardSection = document.getElementById('dashboard');
    const userEmailSpan = document.getElementById('userEmail');
    
    const incomeForm = document.getElementById('incomeForm');
    const incomeAmountInput = document.getElementById('incomeAmount');
    const totalIncomeSpan = document.getElementById('totalIncome');
    
    const expenseForm = document.getElementById('expenseForm');
    const expenseAmountInput = document.getElementById('expenseAmount');
    const totalExpensesSpan = document.getElementById('totalExpenses');
    
    const balanceSpan = document.getElementById('balance');
    
    let totalIncome = 0;
    let totalExpenses = 0;
    
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;
      
      // Simulate login (for demo purposes)
      if (email && password) {
        authSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        userEmailSpan.textContent = email;
      }
    });
    
    incomeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = parseFloat(incomeAmountInput.value);
      
      if (!isNaN(amount) && amount > 0) {
        totalIncome += amount;
        totalIncomeSpan.textContent = totalIncome.toFixed(2);
        updateBalance();
        incomeAmountInput.value = '';
      }
    });
    
    expenseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const amount = parseFloat(expenseAmountInput.value);
      
      if (!isNaN(amount) && amount > 0) {
        totalExpenses += amount;
        totalExpensesSpan.textContent = totalExpenses.toFixed(2);
        updateBalance();
        expenseAmountInput.value = '';
      }
    });
    
    function updateBalance() {
      const balance = totalIncome - totalExpenses;
      balanceSpan.textContent = balance.toFixed(2);
    }
  });
  