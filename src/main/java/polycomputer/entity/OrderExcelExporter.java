package polycomputer.entity;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import lombok.Data;

@Data
public class OrderExcelExporter {
	
	private XSSFWorkbook workbook;
	private XSSFSheet sheet;

	private List<Order> listOrders;

	public OrderExcelExporter(List<Order> listOrders) {

		this.listOrders = listOrders;
		workbook = new XSSFWorkbook();
		sheet = workbook.createSheet("Danh sách đơn hàng");
	}
	
	private void writeHeaderRow() {

		Row row = sheet.createRow(0);

		Cell cell = row.createCell(0);
		cell.setCellValue("Mã đơn hàng");
		
		cell = row.createCell(1);
		cell.setCellValue("Họ và tên");

		cell = row.createCell(2);
		cell.setCellValue("Địa chỉ giao hàng");
		
		cell = row.createCell(3);
		cell.setCellValue("Địa chỉ email");

		cell = row.createCell(4);
		cell.setCellValue("Số điện thoại");

		cell = row.createCell(5);
		cell.setCellValue("Tổng tiền thanh toán");

		cell = row.createCell(6);
		cell.setCellValue("Ghi chú");

		cell = row.createCell(7);
		cell.setCellValue("Người mua");
		
		cell = row.createCell(8);
		cell.setCellValue("Trạng thái đơn hàng");
	}
	
	private void writeDataRows() {
		int rowCount = 1;
		for (Order order : listOrders) {
			Row row = sheet.createRow(rowCount++);

			Cell cell = row.createCell(0);
			cell.setCellValue(order.getOrderId());

			cell = row.createCell(1);
			cell.setCellValue(order.getFullName());

			cell = row.createCell(2);
			cell.setCellValue(order.getAddress());

			cell = row.createCell(3);
			cell.setCellValue(order.getEmail());

			cell = row.createCell(4);
			cell.setCellValue(order.getPhoneNumber());
			
			cell = row.createCell(5);
			cell.setCellValue(order.getTongTienThanhToan());
			
			cell = row.createCell(6);
			cell.setCellValue(order.getDescription());
			
			cell = row.createCell(7);
			cell.setCellValue(order.getAccount().getUsername().toString());
			
			cell = row.createCell(8);
			cell.setCellValue(order.getStatusId().getStatusName());

		}

	}
	
	public void export(HttpServletResponse response) throws IOException {

		writeHeaderRow();
		writeDataRows();

		ServletOutputStream outputStream = response.getOutputStream();
		workbook.write(outputStream);
		workbook.close();
		outputStream.close();

	}

}
