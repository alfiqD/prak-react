import { Button } from "@/components/ui/button";
import PageHeader from "../components/PageHeader";
import { CardContent, CardFooter, CardHeader, CardDescription, CardTitle, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FiturXYZ() {
    return (
        <div id="dashboard-container" className="p-6">
            
            {/* --- BAGIAN HEADER --- */}
            <PageHeader 
                title="Dashboard" 
                breadcrumb={["Fitur XYZ"]} 
            >
                {/* Tombol Add Report (Opsional) */}
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md">
                    + Add Report
                </button>
            </PageHeader>
            {/* --------------------------------- */}

            {/* Sisa card di bawah ini sudah dihapus total agar hanya menampilkan header */}
            <Button>Simpan</Button>
            <Button variant="outline">Simpan</Button>
            <Button variant="secondary">Simpan</Button>
            <Button variant="ghost">Simpan</Button>
            <Button variant="destructive">Simpan</Button>
            <Button variant="link">Simpan</Button>

                  <Card className="mt-4 w-[380px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Belajar shadcn/ui</CardTitle>
            <Badge variant="secondary">Baru</Badge>
          </div>
          <CardDescription>
            Contoh penggunaan komponen shadcn/ui di React
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Komponen ini dibuat di branch <strong>setup-shadcn</strong>
            lalu di-merge ke main.
          </p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button>Simpan</Button>
          <Button variant="outline">Batal</Button>
        </CardFooter>
      </Card>

        </div>
    );
}