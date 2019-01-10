# Create VM Azure Marketplace
1. Define SKU and Offer
2. Create Azure-compatible VHD
3. Deploy VM from VHD
4. Certify VM Image
5. Upload to Publishing Portal

---
# Define SKU
1. Create a Offer (in [publishing portal](https://publish.windowsazure.com))
    *An offer is a parent of all its SKUs.*
1. Define SKU (in [publishing portal](https://publish.windowsazure.com))
   *A SKU is a single VM*

<br />

   *A Offer can have multiple SKUs*

---

#   Create VHD

1. VHD size 128 GB fixed-format VHD
2. Data Disks large as 1 TB
3. Strip Configuration 
   ```sysprep.exe /generalize /oobe /shutdown```




---
# VM/VHD Tools
[Create VM Images](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sa-copy-generalized?toc=%2Fazure%2Fvirtual-machines%2Fwindows%2Ftoc.json) ![small](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwEHBgkIAQgKCgkLDRYPDQUMDRsUFRAWIB0iIiAdHx8kKDQgJCYxJx8fLT0tMTUrOjo6Iys/ODM4QzQtOisBCgoKAQwNGg8PGjcdHx03NzcrNzc3Kzc3Kzc3Nzc3Nzc3Nys3Nys3Kzc3KzcrNzc3Kzc3NzcrNzc3Nzc3Nzc3N//AABEIABAAEAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAADBgcB/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBQQGEQASITEIE1EH/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB0RAAEDBQEAAAAAAAAAAAAAAAECQeEAAwYhURH/2gAMAwEAAhEDEQA/AKGictdyVdYvmpdQ2FlA2qxtPXOgy0rd8U9t/R6pSUqGW393Cx9GlGEX49AOSHliahx4ukphg2vnJzuUcday7nrolHqc2PVGqKletuMZp1pS2D1jI0mizjRWAzxQxvZcUnvupr//2Q==)


[Generalize VM](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sa-copy-generalized?toc=%2Fazure%2Fvirtual-machines%2Fwindows%2Ftoc.json) ![small](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwEHBgkIAQgKCgkLDRYPDQUMDRsUFRAWIB0iIiAdHx8kKDQgJCYxJx8fLT0tMTUrOjo6Iys/ODM4QzQtOisBCgoKAQwNGg8PGjcdHx03NzcrNzc3Kzc3Kzc3Nzc3Nzc3Nys3Nys3Kzc3KzcrNzc3Kzc3NzcrNzc3Nzc3Nzc3N//AABEIABAAEAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAADBgcB/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBQQGEQASITEIE1EH/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB0RAAEDBQEAAAAAAAAAAAAAAAECQeEAAwYhURH/2gAMAwEAAhEDEQA/AKGictdyVdYvmpdQ2FlA2qxtPXOgy0rd8U9t/R6pSUqGW393Cx9GlGEX49AOSHliahx4ukphg2vnJzuUcday7nrolHqc2PVGqKletuMZp1pS2D1jI0mizjRWAzxQxvZcUnvupr//2Q==)


[Manage VM Images](https://azure.microsoft.com/en-us/blog/vm-image-powershell-how-to-blog-post/) ![small](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwEHBgkIAQgKCgkLDRYPDQUMDRsUFRAWIB0iIiAdHx8kKDQgJCYxJx8fLT0tMTUrOjo6Iys/ODM4QzQtOisBCgoKAQwNGg8PGjcdHx03NzcrNzc3Kzc3Kzc3Nzc3Nzc3Nys3Nys3Kzc3KzcrNzc3Kzc3NzcrNzc3Nzc3Nzc3N//AABEIABAAEAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAADBgcB/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBQQGEQASITEIE1EH/8QAFAEBAAAAAAAAAAAAAAAAAAAABf/EAB0RAAEDBQEAAAAAAAAAAAAAAAECQeEAAwYhURH/2gAMAwEAAhEDEQA/AKGictdyVdYvmpdQ2FlA2qxtPXOgy0rd8U9t/R6pSUqGW393Cx9GlGEX49AOSHliahx4ukphg2vnJzuUcday7nrolHqc2PVGqKletuMZp1pS2D1jI0mizjRWAzxQxvZcUnvupr//2Q==)


---

# Obtain certification for VM image

1. From Generalized VHD spin up VM
1. Download [Azure Certified Test Tool](https://www.microsoft.com/en-us/download/details.aspx?id=44299)

---

# Test Against VM

![full](https://microshak.github.io/MicroNotes/Images/vm-image-certification-test-sample-win.png)

---

# Questionnaire

![full](https://microshak.github.io/MicroNotes/Images/vm-image-certification-questionnaire.png)

--- 

# Blob
 

1. Use Blob Explorer to get a shared access token (list, read permissions)

---

# Publishing Portal
Upload VHD and Certification to publishing portal
![small](https://microshak.github.io/MicroNotes/Images/pubportal-menu-solution-templates.png)