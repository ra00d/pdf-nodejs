const puppeteer = require("puppeteer");
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Statement</title>
    <style>
html {
  -webkit-print-color-adjust: exact;
}
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.5;
            margin: 0;
            padding: 20px;
            color: #333;
background-color:#f9fafc;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #eee;
            padding: 40px;
       }

        .header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
        }

        .logo {
            width: 60px;
            height: 60px;
            background: #000;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .company-address {
            text-align: right;
            font-size: 14px;
            color: #666;
        }

        .statement-info {
            display: grid;
background-color:#fff;
border:1px solid #eee;
boder-radius:5px;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }

        .info-group {
            margin-bottom: 5px;
        }

        .info-group h2 {
            font-size: 14px;
            color: #666;
            margin: 0 0 5px 0;
            font-weight: normal;
        }

        .info-group p {
            margin: 0;
            font-size: 14px;
font-weight:bold;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }

        th {
            text-align: left;
            padding: 10px;
            border-bottom: 1px solid #eee;
            color: #666;
            font-weight: normal;
            font-size: 14px;
        }

        td {
            padding: 10px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
        }

        .amount {
            text-align: right;
        }

        .summary {
            margin-left: auto;
            width: 300px;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            font-size: 14px;
        }

        .net-amount {
            border-top: 1px solid #eee;
            margin-top: 10px;
            padding-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                siolla.
            </div>
            <div class="company-address">
                123 Siolla St , Riyadh , KSA<br>
                12356 Saudi Arabia
            </div>
        </div>

        <div class="statement-info">
            <div>
                <div class="info-group">
                    <h2>Name</h2>
                    <p>John Doe</p>
                </div>
                <div class="info-group">
                    <h2>Address</h2>
                    <p>123 John Doe St, Riyadh , KSA</p>
                </div>
                <div class="info-group">
                    <h2>Subject</h2>
                    <p>Account Statement</p>
                </div>
            </div>
            <div style='margin:20px 0px;'>
                <div class="info-group">
                    <h2>Account ID</h2>
                    <p>#AB2324-01</p>
                </div>
                <div class="info-group">
                    <h2>Statement date</h2>
                    <p>01 Aug, 2023</p>
                </div>
                <div class="info-group">
                    <h2>Due date</h2>
                    <p>01 Dec 2023 - 31 Oct 2024</p>
                </div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>TYPE</th>
                    <th>CURRENCY</th>
                    <th class="amount">AMOUNT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2024-10-10</td>
                    <td>Purchase</td>
                    <td>Debit</td>
                    <td>USD</td>
                    <td class="amount">100.00</td>
                </tr>
                <tr>
                    <td>2024-10-10</td>
                    <td>Withdrawal</td>
                    <td>Credit</td>
                    <td>SAR</td>
                    <td class="amount">500.00</td>
                </tr>
            </tbody>
        </table>

        <div class="summary">
            <div class="summary-row">
                <span>Total Transactions</span>
                <span>4</span>
            </div>
            <div class="summary-row">
                <span>Total Credit</span>
                <span>4</span>
            </div>
            <div class="summary-row">
                <span>Total Debit</span>
                <span>4</span>
            </div>
            <div class="summary-row net-amount">
                <span>Net Amount</span>
                <span>USD 300.00</span>
            </div>
        </div>
    </div>
</body>
</html>`;
(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: "shell",
  });
  const page = await browser.newPage();

  // Define your HTML and CSS
  const htmlContent = html;
  // Set the HTML content of the page
  await page.setContent(htmlContent);

  // Generate a PDF
  const buffer = await page.pdf({
    format: "A4", // Page format
    margin: { top: "20px", right: "20px", bottom: "20px", left: "20px" }, // Margins
  });

  console.log("PDF generated successfully!");

  // Close the browser
  await browser.close();
})();
