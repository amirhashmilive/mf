import os
import math
from PIL import Image, ImageDraw, ImageFilter

def generate_bolti_nadi_images():
    out_dir = r"D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website\assets\images"
    os.makedirs(out_dir, exist_ok=True)
    w, h = 1200, 800

    # ── 1. Bolti Nadi Dry (Before Revival - Arid riverbed) ───────
    dry_img = Image.new("RGB", (w, h), (180, 155, 120))
    draw = ImageDraw.Draw(dry_img)

    # Arid gradient sky
    for y in range(int(h * 0.45)):
        ratio = y / (h * 0.45)
        r = int(225 - 40 * ratio)
        g = int(200 - 45 * ratio)
        b = int(170 - 50 * ratio)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Barren dry hills in background
    for hill in range(3):
        pts = [(0, int(h * 0.45))]
        for x in range(0, w + 40, 30):
            hy = int(h * 0.35 + math.sin(x * 0.005 + hill) * 50 + math.cos(x * 0.01) * 20)
            pts.append((x, hy))
        pts.append((w, int(h * 0.45)))
        draw.polygon(pts, fill=(160 - hill * 15, 135 - hill * 15, 105 - hill * 10))

    # Cracked dry sand/gravel riverbed
    for y in range(int(h * 0.45), h):
        ratio = (y - h * 0.45) / (h * 0.55)
        r = int(190 - 40 * ratio)
        g = int(160 - 35 * ratio)
        b = int(120 - 30 * ratio)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Draw crack fissures across dry riverbed
    for crack in range(12):
        start_x = 100 + crack * 95
        start_y = int(h * 0.5)
        curr_x, curr_y = start_x, start_y
        for step in range(15):
            next_x = curr_x + int(math.sin(step * 1.5 + crack) * 25)
            next_y = curr_y + 20
            draw.line([(curr_x, curr_y), (next_x, next_y)], fill=(120, 95, 65), width=2)
            curr_x, curr_y = next_x, next_y

    dry_path = os.path.join(out_dir, "bolti-nadi-dry.webp")
    dry_img.save(dry_path, "WEBP", quality=85)
    print(f"[SUCCESS] Generated {dry_path}")

    # ── 2. Bolti Nadi Flowing (After Revival - Lush river) ─────────
    flow_img = Image.new("RGB", (w, h), (20, 90, 80))
    draw_flow = ImageDraw.Draw(flow_img)

    # Vibrant clean sky
    for y in range(int(h * 0.45)):
        ratio = y / (h * 0.45)
        r = int(170 + 40 * ratio)
        g = int(215 + 25 * ratio)
        b = int(230 + 15 * ratio)
        draw_flow.line([(0, y), (w, y)], fill=(r, g, b))

    # Lush green forested hills
    for hill in range(3):
        pts = [(0, int(h * 0.45))]
        for x in range(0, w + 40, 30):
            hy = int(h * 0.32 + math.sin(x * 0.006 + hill * 1.5) * 45 + math.cos(x * 0.012) * 25)
            pts.append((x, hy))
        pts.append((w, int(h * 0.45)))
        draw_flow.polygon(pts, fill=(35 + hill * 15, 110 + hill * 20, 65 + hill * 15))

    # Dense riverbanks (green foliage)
    draw_flow.polygon([(0, int(h * 0.45)), (w * 0.35, int(h * 0.45)), (0, h)], fill=(40, 130, 60))
    draw_flow.polygon([(w, int(h * 0.45)), (w * 0.65, int(h * 0.45)), (w, h)], fill=(35, 125, 55))

    # Pristine blue-teal flowing river
    river_pts = [
        (w * 0.35, int(h * 0.45)),
        (w * 0.65, int(h * 0.45)),
        (w, h),
        (0, h)
    ]
    draw_flow.polygon(river_pts, fill=(13, 110, 120))

    # Sparkling water ripples & reflections
    for rip in range(25):
        y_r = int(h * 0.48 + rip * 12)
        r_w = int(60 + rip * 35)
        x_c = int(w * 0.5 + math.sin(rip * 0.8) * 60)
        draw_flow.ellipse([x_c - r_w, y_r - 2, x_c + r_w, y_r + 2], fill=(200, 240, 245, 160))

    flow_path = os.path.join(out_dir, "bolti-nadi-flowing.webp")
    flow_img.save(flow_path, "WEBP", quality=85)
    print(f"[SUCCESS] Generated {flow_path}")

if __name__ == "__main__":
    generate_bolti_nadi_images()
