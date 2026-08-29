import os
import math
from PIL import Image, ImageDraw, ImageFilter

def create_hero_frames():
    out_dir = r"D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website\assets\images\hero-frames"
    os.makedirs(out_dir, exist_ok=True)
    
    width, height = 1920, 1080
    total_frames = 45

    # Core brand colors
    # Teal: #0D5B5E -> (13, 91, 94)
    # Dark Teal: #08403F -> (8, 64, 63)
    # Gold: #D49B3F -> (212, 155, 63)
    # Terracotta: #C2542C -> (194, 84, 44)
    # Light Teal: #E8F2F2 -> (232, 242, 242)

    for i in range(1, total_frames + 1):
        t = (i - 1) / (total_frames - 1)  # 0.0 to 1.0

        # Create base canvas with smooth rich cinematic gradient
        img = Image.new("RGBA", (width, height), (8, 30, 32, 255))
        draw = ImageDraw.Draw(img)

        # Draw deep ambient background glow (aurora / river mist)
        cx, cy = width // 2, height // 2
        
        # Radial gradient layers
        for r_step in range(15, 0, -1):
            radius = int(800 * (r_step / 15.0))
            alpha = int(25 * (1.0 - (r_step / 15.0)))
            # Color shifts from Teal to River Aqua to Saffron warmth
            r_col = int(13 + (212 - 13) * 0.2 * t)
            g_col = int(91 + (155 - 91) * 0.1 * math.sin(t * math.pi))
            b_col = int(94 - 40 * t)
            glow_box = [cx - radius, cy - int(radius * 0.6) + int(100 * t), cx + radius, cy + int(radius * 0.6) + int(100 * t)]
            draw.ellipse(glow_box, fill=(r_col, g_col, b_col, alpha))

        # Flowing 3D River Waves in Lower Half
        wave_layers = 5
        for w in range(wave_layers):
            wave_y_base = height * 0.55 + w * 70
            points = []
            points.append((0, height))
            for x in range(0, width + 50, 40):
                # Harmonic wave equation with scroll progression
                wave_freq = 0.003 + w * 0.001
                wave_speed = t * 6.28 + w * 1.2
                y_offset = math.sin(x * wave_freq + wave_speed) * (35 + w * 12) + math.cos(x * 0.006 - t * 4) * 15
                # perspective slope
                perspective_y = wave_y_base + y_offset + (t * 40 * (w + 1))
                points.append((x, perspective_y))
            points.append((width, height))

            wave_alpha = int(40 + w * 35 * (0.6 + 0.4 * t))
            r_w = int(10 + w * 8)
            g_w = int(70 + w * 22)
            b_w = int(80 + w * 18)
            draw.polygon(points, fill=(r_w, g_w, b_w, wave_alpha))

        # 3D Sacred Geometric Lotus in Center (Unfolding petals)
        # As t progresses (0.0 -> 0.6), lotus unfolds from bud to bloom
        # As t progresses (0.6 -> 1.0), lotus elevates and transforms into a radiant sun/crest above river
        lotus_scale = 1.0 - 0.35 * (t ** 1.5)
        lotus_y = cy - int(120 * t)
        petal_count = 12
        open_factor = min(1.0, t * 1.8) # 0 = closed bud, 1 = fully open

        # Outer petals
        for layer in range(3, 0, -1):
            num_petals = 6 + layer * 2
            layer_radius = int((140 + layer * 55) * lotus_scale * (0.4 + 0.6 * open_factor))
            layer_spread = 0.3 + 0.7 * open_factor
            
            for p in range(num_petals):
                angle = (p / num_petals) * 2 * math.pi + (layer * 0.25) + t * 0.4
                # Petal tip
                tip_x = cx + math.cos(angle) * layer_radius
                tip_y = lotus_y + math.sin(angle) * layer_radius * 0.75 - int(30 * (1 - open_factor))
                
                # Petal controls
                left_angle = angle - (math.pi / num_petals) * layer_spread
                right_angle = angle + (math.pi / num_petals) * layer_spread
                ctrl_r = layer_radius * 0.55
                
                c1_x = cx + math.cos(left_angle) * ctrl_r
                c1_y = lotus_y + math.sin(left_angle) * ctrl_r * 0.75
                c2_x = cx + math.cos(right_angle) * ctrl_r
                c2_y = lotus_y + math.sin(right_angle) * ctrl_r * 0.75
                
                petal_pts = [(cx, lotus_y), (c1_x, c1_y), (tip_x, tip_y), (c2_x, c2_y)]
                
                # Gold & Saffron petal glow
                p_r = int(212 - layer * 20 + 30 * t)
                p_g = int(155 - layer * 25)
                p_b = int(63 + layer * 15)
                p_a = int(140 - layer * 20)
                
                draw.polygon(petal_pts, fill=(p_r, p_g, p_b, p_a), outline=(255, 230, 160, int(180 * open_factor)))

        # Lotus Core / Golden Seed of Light
        core_r = int(35 * lotus_scale * (1 + 0.5 * math.sin(t * math.pi * 2)))
        draw.ellipse([cx - core_r, lotus_y - core_r, cx + core_r, lotus_y + core_r], 
                     fill=(255, 235, 170, 240), outline=(212, 155, 63, 255))

        # Floating Energy Particles & Droplets (3D depth simulation)
        num_particles = 40
        for p_idx in range(num_particles):
            p_seed = p_idx * 137.5
            p_speed = 0.5 + (p_idx % 5) * 0.3
            p_prog = (t * p_speed + (p_idx / num_particles)) % 1.0
            
            p_x = int((cx + math.sin(p_seed) * (300 + p_idx * 15)) % width)
            p_y = int(height - p_prog * height)
            p_size = int(2 + (p_idx % 4) * (1.0 + 0.5 * math.sin(t * 3)))
            p_alpha = int(180 * math.sin(p_prog * math.pi))
            
            draw.ellipse([p_x - p_size, p_y - p_size, p_x + p_size, p_y + p_size], 
                         fill=(255, 255, 255, p_alpha))

        # Subtle smooth blur for atmospheric depth
        frame_name = f"hero-frame-{str(i).zfill(3)}.webp"
        frame_path = os.path.join(out_dir, frame_name)
        img.save(frame_path, "WEBP", quality=82, method=4)

    print(f"[SUCCESS] Generated {total_frames} hero animation frames in {out_dir}")

if __name__ == "__main__":
    create_hero_frames()
