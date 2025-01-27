export const serviceRequestEmail =  (email: string, name: string, phoneNumber: string, message: string, id: string, designation: string, company: string) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Service Request</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f9f9f9;
            }
            header {
                background-color: #007bff;
                color: white;
                padding: 10px 20px;
                text-align: center;
            }
            footer {
                background-color: #333;
                color: white;
                padding: 10px 20px;
                text-align: center;
                position: fixed;
                bottom: 0;
                width: 100%;
            }
            table {
                width: 80%;
                margin: 20px auto;
                border-collapse: collapse;
                background: white;
            }
            table, th, td {
                border: 1px solid #ddd;
            }
            th, td {
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
            .container {
                padding-bottom: 50px;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Service Request Details</h1>
        </header>
        
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>${phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td>${id}</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>${designation}</td>
                    </tr>
                    <tr>
                        <td>Comapany</td>
                        <td>${company}</td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>${message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <footer>
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
            <p>Contact us: support@example.com</p>
        </footer>
    </body>
    </html>
`

    return html;
};